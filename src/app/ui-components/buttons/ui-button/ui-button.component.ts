import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes, DropButtons, OrientationCustomType, TargetPageType } from '../../ui-types';

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

  @Input()
  disabled: boolean = false;

  @Input()
  orientation: OrientationCustomType = 'LEFT';


  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit(): void {

  }

  public CallEndpoint(endpoint: string, target?: TargetPageType): void{
    const header = {};
    const body = {};
    this.httpService.post(endpoint,body,{headers: header}).subscribe(
      (callBack) => {
        console.log(callBack);
      },
      (error: Error) => {
        console.log(error);

      }
      )
  }
}
