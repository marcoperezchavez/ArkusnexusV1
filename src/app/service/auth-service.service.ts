import { UserLogin } from 'src/models/userLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: UserLogin;

  constructor() { }

  setUser(user: UserLogin) {
    this.user = user;
  }
}
