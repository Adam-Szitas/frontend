import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('inside canActivate method');
        return this.isUserLoggedIn();
    }

    private isUserLoggedIn(): boolean {
        console.log('Checking if user is logged in');
        if (this.auth.isUserLoggedIn) {
            return true;
        } else return false;
    }
}
