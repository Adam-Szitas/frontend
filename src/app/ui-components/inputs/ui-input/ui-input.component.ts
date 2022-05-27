import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { ValidationMessages } from 'src/app/login.interfaces';

@Component({
    selector: 'app-ui-input',
    templateUrl: './ui-input.component.html',
    styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent implements OnInit {
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
    placeholder?: string | null;
    @Input()
    CustomValidator!: Array<ValidatorFn>;
    @Input()
    CustomValidationMessages?: ValidationMessages;
    @Input()
    inputType: 'text' | 'radio' | 'number' = 'text';
    @Input()
    spacing: number = 1;

    input = new FormControl(this.inputText, this.CustomValidator);

    constructor() {}

    ngOnInit(): void {}
}
