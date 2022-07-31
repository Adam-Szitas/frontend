import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateService } from '@ngx-translate/core';
import { ComponentModule } from 'src/app/ui-components/component.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SkeletonComponent } from './skeleton.component';
import { TabComponent } from './works/tab/tab.component';
import { SearchComponent } from './works/search/search.component';
import { CommonModule } from '@angular/common';
import { SkeletonRoutingModule } from './skeleton-routing.module';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME_STATE, Reducer } from '../legs/reducers/reducer';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ComponentModule,
        StoreModule.forFeature(FEATURE_NAME_STATE, Reducer),
        CommonModule,
        SkeletonRoutingModule,
        ReactiveComponentModule,
    ],
    bootstrap: [NavbarComponent, SkeletonComponent],
    declarations: [NavbarComponent, SkeletonComponent, TabComponent, SearchComponent],
    exports: [NavbarComponent, SkeletonComponent, RouterModule],
    providers: [],
})
export class SkeletonModule {
    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'sk', 'hu']);
        this.translateService.setDefaultLang('en');
    }
}
