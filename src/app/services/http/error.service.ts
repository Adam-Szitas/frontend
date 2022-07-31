import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor() {}

    public responseErrorHandler(error: HttpErrorResponse) {
        console.log(error.message);
    }
}
