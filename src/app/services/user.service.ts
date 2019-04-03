import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      firstName: 'aziz',
      lastName: 'merdi',
      email: 'aziz@gmail.com',
      drinkPreference: 'coca',
      hobbies: [
        'coder',
        'jouer',
        'music'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  constructor() { }

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUsers(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
