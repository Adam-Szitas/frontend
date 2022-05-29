import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private httpService: HttpService) {}

    isValidUserToken(userToken: string | null): boolean {
        const response = this.httpService.isValidUserToken(userToken);
        return !!response;
    }
}
