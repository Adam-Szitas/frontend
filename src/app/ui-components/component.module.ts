import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiButtonComponent } from './buttons/ui-button/ui-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    declarations: [UiButtonComponent, UiButtonComponent],
    exports: [TranslateModule, UiButtonComponent],
})
export class ComponentModule {}
