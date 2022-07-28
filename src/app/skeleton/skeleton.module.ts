import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateService } from '@ngx-translate/core';
import { ComponentModule } from 'src/app/ui-components/component.module';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SkeletonComponent } from './skeleton.component';
import { TabComponent } from './works/tab/tab.component';
import { SearchComponent } from './works/search/search.component';

//TODO add NgRx/store to skeleton

@NgModule({
    imports: [ComponentModule, AppRoutingModule, ReactiveComponentModule],
    bootstrap: [NavbarComponent, SkeletonComponent],
    declarations: [NavbarComponent, SkeletonComponent, TabComponent, SearchComponent],
    exports: [NavbarComponent, SkeletonComponent],
})
export class SkeletonModule {
    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'sk', 'hu']);
        this.translateService.setDefaultLang('en');
    }
}
