import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { RouteGuardService } from './services/route-guard/route-guard.service';
import { PageNotFoundComponent } from './void/page-not-found/page-not-found.component';

const skeletonRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'app',
        canActivate: [RouteGuardService],
        loadChildren: () => import('./skeleton/skeleton.module').then((_) => _.SkeletonModule),
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(skeletonRoutes)],
    exports: [RouterModule],
    providers: [RouteGuardService],
})
export class AppRoutingModule {}
