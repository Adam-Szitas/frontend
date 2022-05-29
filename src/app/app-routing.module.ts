import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './void/page-not-found/page-not-found.component';

//TODO insert every page and subpage
const routes: Routes = [
    // {
    //     path: 'work',
    //     component: WorkComponent,
    // },
    // {
    //     path: 'work/tab',
    //     component: WorkComponent,
    // },
    // {
    //     path: 'offer',
    //     component: WorkComponent,
    // },
    // {
    //     path: 'offer/tab',
    //     component: WorkComponent,
    // },
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
