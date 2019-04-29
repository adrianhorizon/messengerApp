import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;
  nick: string = null;

  constructor(
    private authenticacionService: AuthenticationService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this. authenticacionService.loginEmail(this.email, this.password)
    .then((data) => {
      console.log(`logeado ${data}`)
      this.router.navigate(['home']);
    }).catch((err) => {  
      console.log(`error ${err}`)
    });
  }

  register(){
    this. authenticacionService.RegisterEmail(this.email, this.password)
    .then((data) => {
      const user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick
      };
      this.userService.createUser(user)
      .then((data) => {
        console.log(`creado ${data}`)
      })
      .catch((err) => {
        console.log(`error create ${err}`)
      });
    }).catch((err) => {  
      console.log(`error ${err}`)
    });
  }

}
