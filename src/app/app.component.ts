import { Component, OnInit } from '@angular/core';
import { UserService } from './services/facade/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean =
    this.userFacadeService.userData.login.isLoggedin() ?? false;

  constructor(private userFacadeService: UserService) {}

  ngOnInit(): void {
    // console.log(this.isLoggedIn);
  }
}
