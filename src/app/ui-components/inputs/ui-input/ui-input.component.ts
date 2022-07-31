import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { InputTypes, ValidationMessages } from 'src/app/login.interfaces';

@Component({
    selector: 'app-ui-input',
    templateUrl: './ui-input.component.html',
    styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent {
    @ViewChild('inputRef') inputRef: ElementRef;

    @Input()
    parentForm!: FormGroup;

    @Input()
    inputId: string = '';
    @Input()
    labelText: string = '';
    @Input()
    inputText: string = '';
    @Input()
    isDisabled: boolean = false;
    @Input()
    inputName: string = '';
    @Input()
    placeHolder: string = '';
    @Input()
    CustomValidator?: Array<ValidatorFn>;
    @Input()
    CustomValidationMessages?: ValidationMessages;
    @Input()
    inputType: InputTypes = 'text';
    @Input()
    spacing: number = 1;
    @Input()
    formControlNameString!: string;

    public focused: boolean = false;

    public input = new FormControl(this.inputText, this.CustomValidator);

    public toggleFocus(isFocused: boolean) {
        if (isFocused === false && this.inputRef.nativeElement.value) {
            return;
        }
        this.focused = isFocused;
    }
    public activateInput() {
        this.focused = true;
        this.inputRef.nativeElement.focus();
    }
}
