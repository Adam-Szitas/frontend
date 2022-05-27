import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from './services/facade/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private userFacadeService: UserFacadeService) {}

    isLoggedIn: boolean = this.userFacadeService.userData.login.isLoggedin ?? false;

    ngOnInit(): void {
        // console.log(this.isLoggedIn);
    }
}
