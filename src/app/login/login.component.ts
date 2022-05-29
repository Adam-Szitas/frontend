import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormInput } from '../login.interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormInput = {
        position: 'CENTER',
        direction: 'COLUMN',
        formGroupName: 'loginForm',
        form: {
            formControlInputs: [
                {
                    id: 'userName',
                    controlName: 'userName',
                    label: 'LOGIN.USER_NAME',
                    validatorFn: [Validators.required, Validators.min(6)],
                    placeHolder: 'LOGIN.USER_NAME',
                },
                {
                    id: 'password',
                    controlName: 'password',
                    label: 'LOGIN.PASSWORD',
                    validatorFn: [Validators.required, Validators.min(6)],
                    placeHolder: 'LOGIN.PASSWORD',
                },
            ],
        },
    };

    public onSubmitForm($event: any) {
        console.log($event);
    }
}
