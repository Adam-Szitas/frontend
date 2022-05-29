import { Component, Input, Output } from '@angular/core';
import { FormInput } from 'src/app/login.interfaces';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ui-form',
    templateUrl: './ui-form.component.html',
    styleUrls: ['./ui-form.component.scss'],
})
export class UiFormComponent {
    @Input()
    formInput!: FormInput;

    @Output()
    onSubmit: EventEmitter<Event> = new EventEmitter();

    public isFormValid: boolean = false;

    public onSubmitForm($event: Event) {
        this.onSubmit.emit($event);
    }
}
