import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    config: any;

    constructor(private http: HttpClient) { }

    loadConfig(): any {
        return this.http
            .get<any>('./assets/config/config.json')
            .toPromise()
            .then(config => {
                this.config = config;
            })
            .catch(config => console.error(config))
            ;
    }
    getConfig(key: any) {
        return this.config.serviceConfig[key]
    }
}
