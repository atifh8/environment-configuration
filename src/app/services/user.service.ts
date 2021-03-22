import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/configloader/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  url = this.configService.getConfig('apiurl');
  getUsers() {
    return this.http.get(`${this.url}users`, {
      params: new HttpParams().set('page', '6')
    })

  }
  getUserById(id: string) {
    return this.http.get(`${this.url}users`, {
      params: new HttpParams().set('id', id)
    })
  }
}


