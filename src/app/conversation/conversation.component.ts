import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  id: any;
  user: User;
  constructor(public activatedRoute: ActivatedRoute, public userService: UserService) {
    this.id = activatedRoute.snapshot.params['user_id'];
    this.userService.getUsersById(this.id)
    .valueChanges().subscribe(
      (data: User) => {
        this.user = data;    
      }, (err) => {
        console.log(err)
      }
    );
  }

  ngOnInit() {
  }
}
