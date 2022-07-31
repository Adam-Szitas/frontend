import { Component, Input, Output } from '@angular/core';
import { FormInput } from 'src/app/login.interfaces';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ui-form',
    templateUrl: './ui-form.component.html',
    styleUrls: ['./ui-form.component.scss'],
})
export class UiFormComponent {
    @Input()
    formInput: FormInput;
    @Input()
    formGroup: FormGroup;

    @Output()
    onSubmit: EventEmitter<any> = new EventEmitter<any>();

    public onSubmitForm() {}
}
