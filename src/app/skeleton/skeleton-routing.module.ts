import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';
import { SearchComponent } from './works/search/search.component';
import { TabComponent } from './works/tab/tab.component';

const routes: Routes = [
    {
        path: 'app',
        component: SkeletonComponent,
        children: [
            {
                path: 'work',
                component: SearchComponent,
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class SkeletonRoutingModule {}
