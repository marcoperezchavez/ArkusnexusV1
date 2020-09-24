import { UserLogin } from './../../../models/userLogin';
import { Injectable } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userLogins: Array<UserLogin> = [
    {
      username: 'marco',
      password: '12345',
      isAdmin: true
    },
    {
      username: 'Abril',
      password: '12345',
      isAdmin: false
    },
    {
      username: 'Sofia',
      password: '12345',
      isAdmin: false
    },
    {
      username: 'Maria',
      password: '12345',
      isAdmin: false
    }
  ];

  constructor(
    private _authServiceService: AuthServiceService
  ) { }

  validateUser(user: UserLogin): Observable<boolean> {
    let userExit = this.userLogins.filter(x => x.username === user.username && x.password === user.password);
    if (userExit.length > 0){
      this._authServiceService.setUser(user);
      return of(true);
    } else {
      return of(false);
    }
  }
}
