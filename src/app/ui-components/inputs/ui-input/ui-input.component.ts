import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { InputTypes, ValidationMessages } from 'src/app/login.interfaces';

@Component({
    selector: 'app-ui-input',
    templateUrl: './ui-input.component.html',
    styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent {
    @Input()
    inputId!: string;
    @Input()
    labelText: string = '';
    @Input()
    inputText?: string | null;
    @Input()
    isDisabled!: boolean;
    @Input()
    inputName!: string;
    @Input()
    placeHolder: string = '';
    @Input()
    CustomValidator!: Array<ValidatorFn>;
    @Input()
    CustomValidationMessages?: ValidationMessages;
    @Input()
    inputType: InputTypes = 'text';
    @Input()
    spacing: number = 1;

    input = new FormControl(this.inputText, this.CustomValidator);
}
