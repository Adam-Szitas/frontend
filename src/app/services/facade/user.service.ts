import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    constructor(private loginService: LoginService) {}

    private userToken = localStorage.getItem('EspmUser'); //TODO implement JWT accessible service

    public get userData() {
        return {
            login: {
                isLoggedin: ((): Observable<boolean> => {
                    return this.loginService.isValidUserToken$(this.userToken);
                })(),
            },
        };
    }
}
