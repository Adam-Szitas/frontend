import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlInput, FormInput } from '../login.interfaces';
import { LoginService } from '../services/login/login.service';
import { LoginCredentials } from '../login.interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private loginService: LoginService) {}

    loginForm: FormInput = {
        position: 'CENTER',
        direction: 'COLUMN',
        formGroupName: 'loginForm',
    };

    formControlInputs: FormControlInput[] = [
        {
            id: 'userName',
            controlName: 'userName',
            label: 'LOGIN.USER_NAME',
            validatorFn: [Validators.required, Validators.min(6)],
            placeHolder: 'LOGIN.USER_NAME',
            type: 'text',
        },
        {
            id: 'password',
            controlName: 'password',
            label: 'LOGIN.PASSWORD',
            validatorFn: [Validators.required, Validators.min(6)],
            placeHolder: 'LOGIN.PASSWORD',
            type: 'password',
        },
    ];

    public isFormValid: boolean = true;

    public formGroup = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.min(6)]),
        password: new FormControl('', [Validators.required, Validators.min(6)]),
    });

    public onSubmitForm() {
        const credentials: LoginCredentials = {
            userName: this.formGroup.getRawValue().userName,
            password: this.formGroup.getRawValue().password,
        };
        this.loginService.login(credentials);
    }
}
