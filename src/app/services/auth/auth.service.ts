import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'next/router';
import * as env from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient, private router: Router) {}

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
