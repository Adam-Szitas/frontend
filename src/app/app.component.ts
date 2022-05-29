import { Component } from '@angular/core';
import { UserFacadeService } from './services/facade/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private userFacadeService: UserFacadeService) {}

    isLoggedIn: boolean = this.userFacadeService.userData.login.isLoggedin ?? false;
}
