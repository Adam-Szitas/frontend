import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'next/router';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import * as env from '../../../environments/environment';
import { UserFacadeService } from '../facade/user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient, private router: Router, private userFacade: UserFacadeService) {}

    public isUserLoggedIn: Observable<number | null> = this.userFacade.userData.userCredentials.userId$;

    private clientSecretKey = env.secretKeys.jwtSecretKey;

    login(loginForm: LoginForm) {
        const data: LoginData = {
            userName: loginForm.userName,
            password: loginForm.password,
            secretKey: this.clientSecretKey,
        };

        this.httpClient.post(env.apiEnvironment.rootApi + '/login', data).subscribe(
            (callBack) => {},
            (error) => {}
        );
    }
}

export interface LoginForm {
    userName: string;
    password: string;
}

interface LoginData {
    userName: string;
    password: string;
    secretKey: string;
}
