import { NgModule } from "@angular/core";
import { UiButtonComponent } from "./buttons/ui-button/ui-button.component";
import { NavbarComponent } from './navbar/navbar/navbar.component';


@NgModule({
  declarations: [
    UiButtonComponent,
    NavbarComponent
  ],
  bootstrap: []
})
export class ComponentModule {}
