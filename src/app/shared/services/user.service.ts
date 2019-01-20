import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {id: 1, nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true},
    {id: 2, nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true},
    {id: 3, nick: 'Nicole', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false},
    {id: 4, nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: true}
  ];
  constructor() { }
  getUsers() {
    return this.users;
  }
  getUserById(id) {
    const foundUser = this.users.find( (u) => {
      return u.id == id;
    });
    return foundUser;
  }
}
