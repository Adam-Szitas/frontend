import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormInput } from '../login.interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    @Output()
    onSubmit: EventEmitter<Event> = new EventEmitter<Event>();

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
            ],
        },
    };

    public onSubmitForm(event: Event) {
        this.onSubmit.emit(event);
    }
}
