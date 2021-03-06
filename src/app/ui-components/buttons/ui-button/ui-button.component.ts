import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ButtonTypes, DropButtons, OrientationCustomType, TargetPageType } from '../../ui-types';

@Component({
    selector: 'app-ui-button',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
    @Input()
    classList: string = '';

    @Input()
    buttonType: ButtonTypes = 'NEXT';

    @Input()
    text: string = '';

    @Input()
    dropButtons: DropButtons[] = [];

    @Input()
    disabled: boolean = false;

    @Input()
    orientation: OrientationCustomType = 'LEFT';

    @Input()
    icon?: string;

    constructor(private httpService: HttpClient) {}

    public CallEndpoint(endpoint: string, target?: TargetPageType): void {
        const header = {}; //TODO extend header and body
        const body = {};
        this.httpService.post(endpoint, body, { headers: header }).subscribe(
            (callBack) => {
                console.log(callBack);
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }

    public getBgColor(color: ButtonTypes) {
        switch (color) {
            case 'SUBMIT':
                return 'espm-green';
            default:
                return 'espm-blue';
        }
    }
}
