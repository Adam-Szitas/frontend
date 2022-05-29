import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private httpService: HttpService) {}

    isValidUserToken$(userToken: string | null): Observable<boolean> {
        const response = this.httpService.isValidUserToken(userToken);
        return of(!!response);
    }
}
