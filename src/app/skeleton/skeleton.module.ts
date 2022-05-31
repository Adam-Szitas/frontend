import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ComponentModule } from 'src/app/ui-components/component.module';
import { AppRoutingModule } from '../app-routing.module';
import { FEATUER_NAME_HTTP, httpReducer } from '../legs/reducers/http-reducer/http.reducer';
import { NavbarComponent } from './navbar/navbar.component';
import { SkeletonComponent } from './skeleton.component';

//TODO add NgRx/store to skeleton

@NgModule({
    imports: [ComponentModule, AppRoutingModule, StoreModule.forFeature(FEATUER_NAME_HTTP, httpReducer)],
    bootstrap: [NavbarComponent, SkeletonComponent],
    declarations: [NavbarComponent, SkeletonComponent],
    exports: [NavbarComponent, SkeletonComponent],
})
export class SkeletonModule {
    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'sk', 'hu']);
        this.translateService.setDefaultLang('en');
    }
}
