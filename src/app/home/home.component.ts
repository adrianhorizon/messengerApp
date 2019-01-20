import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: User[];
  query: string;

  constructor(public userService: UserService) {
    this.friends = userService.getUsers();
  }

  ngOnInit() {
  }

}
