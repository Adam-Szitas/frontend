import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormInput } from '../login.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  form: FormInput = {
    direction: 'CENTER',
    form: {
      formGroup: new FormGroup({
        userName: new FormControl(
          this.translateService.instant('LOGIN.USER_NAME'),
          [Validators.required, Validators.min(6)]
        ),
        password: new FormControl(
          this.translateService.instant('LOGIN.PASSWORD'),
          [Validators.required, Validators.min(6)]
        ),
      }),
    },
  };

  ngOnInit(): void {}
}
