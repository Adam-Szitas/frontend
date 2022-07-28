import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard/route-guard.service';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SearchComponent } from './skeleton/works/search/search.component';
import { TabComponent } from './skeleton/works/tab/tab.component';
import { PageNotFoundComponent } from './void/page-not-found/page-not-found.component';

//TODO insert every page and subpage
const routes: Routes = [
    {
        path: '/',
        component: LoginComponent,
        canActivate: [RouteGuardService],
    },
    {
        path: 'app',
        canActivate: [RouteGuardService],
        component: SkeletonComponent,
        children: [
            {
                path: 'work',
                children: [
                    {
                        path: '',
                        component: SearchComponent,
                    },
                    {
                        path: 'tab',
                        component: TabComponent,
                    },
                ],
            },
        ],
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
