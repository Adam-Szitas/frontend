import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  @Input()
  classList: string[] = [''];

  @Input()
  buttonType: string = 'button';

  @Input()
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
