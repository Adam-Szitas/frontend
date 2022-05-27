import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from 'src/app/login.interfaces';
import * as env from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private UserApi = env.testApi.rootApi + '/user';
    private LoginApi = env.testApi.rootApi + '/login';

    constructor(private httpClient: HttpClient) {}

    isValidUserToken$(userToken: string | null): boolean {
        if (userToken === null) return false;
        else {
            //TODO to be updated to solve JWT
            const header = new HttpHeaders().set('content-type', 'text/json').set('Cache-control', 'no-cache');
            return !!this.httpClient.get(this.UserApi + `/token/${userToken}`, {
                headers: header,
            });
        }
    }

    //TODO login as Observable or through NgRx store selector
    login(credentials: LoginCredentials): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Cache-control': 'no-cache',
            }),
        };

        return this.httpClient.post<Object>(this.LoginApi, credentials, httpOptions);
    }
}
