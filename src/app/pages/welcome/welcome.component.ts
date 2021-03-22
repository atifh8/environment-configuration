import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/configloader/config.service';
import { UserService } from '../../services/user.service'
export interface UserData {
  id: string;
  name: string;
  email: string;
  gender: string;
  updated_at: string;
  created_at: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isFetching: boolean = false;
  dataSource: UserData[]
  constructor(private us: UserService, configService: ConfigService) {
    console.log('config file', configService.config)
  }

  ngOnInit() {
    this.getUserData()
  }
  getUserData() {
    this.isFetching = true;
    console.log('55')
    this.us.getUsers().subscribe((res: any) => {
      console.log('58')
      this.dataSource = (res.data);

      console.log('Am I called in test suite')

      this.isFetching = false;
    }, error => console.log(error)
    )
  }
}
