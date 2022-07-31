import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SkeletonModule } from './skeleton/skeleton.module';
import { ComponentModule } from './ui-components/component.module';
import { UiFormComponent } from './ui-components/forms/ui-form/ui-form.component';
import { UiInputComponent } from './ui-components/inputs/ui-input/ui-input.component';
import { PageNotFoundComponent } from './void/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { RegisterComponent } from './login/register/register.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { InterceptorService } from './services/http/interceptor.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './app/translations/', '.json');
}

//TODO Add NgRx Store
@NgModule({
    declarations: [AppComponent, LoginComponent, UiInputComponent, UiFormComponent, PageNotFoundComponent, RegisterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentModule,
        HttpClientModule,
        SkeletonModule,
        RouterModule,
        ReactiveFormsModule,
        ReactiveComponentModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        FormsModule,
        MatIconModule,
        RouterModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        { provide: LOCALE_ID, useValue: 'en' },
    ],
    bootstrap: [AppComponent],
    exports: [TranslateModule, RouterModule],
})
export class AppModule {
    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'sk', 'hu']);
        this.translateService.setDefaultLang('en'); //TODO geolocator
    }
}
