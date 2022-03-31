import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private loginService: LoginService) {}

  private userToken = localStorage.getItem('EspmUser');

  public get userData() {
    return {
      login: {
        isLoggedin: (): boolean =>
          this.loginService.isValidUserToken(this.userToken),
      },
    };
  }
}
