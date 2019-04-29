import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/interfaces/user';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: User[];
  query: string = '';

  constructor(
    public userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.userService.getUsers()
    .valueChanges().subscribe(
      (data: User[]) => {
        this.friends = data;
      }, (error) => {
        console.log(error)
      });
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout()
    .then(() => {
      alert('session cerrada')
      this.router.navigate(['login'])
    })
    .catch((err) => {console.log(err)})
  }

}
