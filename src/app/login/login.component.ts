import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogin(data): any {
    // console.log(data);
    this.authenticationService.login(data)
      .subscribe(resp => {
        console.log(resp);
       // console.log(resp.headers.authorization);
      }, err => {

      });
  }
}
