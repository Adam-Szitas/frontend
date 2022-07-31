import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';
import * as env from '../../../environments/environment';
import { ErrorService } from '../http/error.service';
import { LoginCredentials } from 'src/app/login.interfaces';
import { UserFacadeService } from '../facade/user.service';
import { take } from 'rxjs/operators';
import { UserState } from 'src/app/legs/reducers/user-credentials/user.reducer';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(
        private httpService: HttpService,
        private httpClient: HttpClient,
        private errorService: ErrorService,
        private userFacade: UserFacadeService,
        private router: Router
    ) {}

    isValidUserToken$(userToken: string | null): Observable<boolean> {
        const response = this.httpService.isValidUserToken(userToken);
        return of(!!response);
    }

    public login(formValue: LoginCredentials) {
        const LOGIN_URL = env.testApi.rootApi + '/auth/login'; //mocked server running on port 8000 - Laravel -> returned values are not set correctly

        const data = {
            user_name: formValue.userName,
            password: formValue.password,
        };

        return this.httpClient
            .post<UserState>(LOGIN_URL, data)
            .pipe(take(1))
            .subscribe(
                (success) => {
                    const data: UserState = {
                        userId: 1,
                        permission: 'OPERATOR',
                        userName: 'delu',
                    };
                    this.userFacade.userData.userCredentials.setUserCredentials(data);
                    this.router.navigate(['app']);
                    return !!success;
                },
                (error: HttpErrorResponse) => {
                    this.errorService.responseErrorHandler(error);
                    return false;
                }
            );
    }
}
