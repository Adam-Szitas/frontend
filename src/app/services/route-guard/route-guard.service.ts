import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from 'next/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
    constructor(private auth: AuthService, private route: Router) {}

    canActivate() {
        return true;
    }
}
