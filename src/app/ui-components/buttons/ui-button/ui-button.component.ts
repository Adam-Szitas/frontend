import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes, DropButtons } from '../../ui-types';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  @Input()
  classList: string = '';

  @Input()
  buttonType: ButtonTypes = 'NEXT';

  @Input()
  text: string = '';

  @Input()
  dropButtons?: DropButtons[];

  constructor() { }

  ngOnInit(): void {
  }

}
