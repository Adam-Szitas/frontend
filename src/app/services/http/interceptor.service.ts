import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    private requestCount = 0;

    constructor(private authService: AuthService, private errorHandler: ErrorService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestCount++;
        // todo add loading spinner

        if (req.url.toLowerCase().endsWith('auth/login')) {
            req = req.clone({ responseType: 'text' });
        } else {
            if (environment.authenticate) {
                req = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken()),
                });
            }
        }

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => event),
            catchError((error: HttpErrorResponse) => {
                const message = error.message;
                this.errorHandler.responseErrorHandler(error);
                return throwError(error);
            }),
            finalize(() => {
                this.requestCount--;
                if (this.requestCount === 0) {
                    //disable spinner
                }
            })
        );
    }
}
