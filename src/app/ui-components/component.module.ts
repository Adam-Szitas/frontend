import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiButtonComponent } from './buttons/ui-button/ui-button.component';
import { UiInputComponent } from './inputs/ui-input/ui-input.component';
import { UiFormComponent } from './forms/ui-form/ui-form.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule,
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
