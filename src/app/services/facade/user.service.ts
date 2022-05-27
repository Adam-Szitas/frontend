import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    constructor(private loginService: LoginService) {}

    private userToken = localStorage.getItem('EspmUser');

    public get userData() {
        return {
            login: {
                isLoggedin: ((): boolean => {
                    console.log('userService: ', this.loginService.isValidUserToken(this.userToken));
                    return this.loginService.isValidUserToken(this.userToken);
                })(),
            },
        };
    }
}
