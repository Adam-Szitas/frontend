import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpService) {}

  isValidUserToken(userToken: string | null): boolean {
    return !!this.httpService.isValidUserToken$(userToken).subscribe({
      next(response: Object) {
        return response;
      },
      error(error) {
        console.log(error);
        //this.errorService.loginLog(error);
      },
    });
  }
}
