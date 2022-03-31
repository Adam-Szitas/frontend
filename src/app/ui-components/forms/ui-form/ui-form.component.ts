import { Component, Input, OnInit } from '@angular/core';
import { FormInput } from 'src/app/login.interfaces';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
})
export class UiFormComponent implements OnInit {
  @Input()
  formGroup!: FormInput;

  constructor() {}

  ngOnInit(): void {
    console.log(this.formGroup);
  }
}
