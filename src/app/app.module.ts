import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SkeletonModule } from './skeleton/skeleton.module';
import { ComponentModule } from './ui-components/component.module';
import { UiFormComponent } from './ui-components/forms/ui-form/ui-form.component';
import { UiInputComponent } from './ui-components/inputs/ui-input/ui-input.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './app/translations/', '.json');
}

//TODO Add NgRx Store
@NgModule({
    declarations: [AppComponent, LoginComponent, UiInputComponent, UiFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentModule,
        HttpClientModule,
        SkeletonModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent, LoginComponent],
    exports: [TranslateModule],
})
export class AppModule {
    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'sk', 'hu']);
        this.translateService.setDefaultLang('en'); //TODO geolocator
    }
}
