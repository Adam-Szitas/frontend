import { Injectable } from '@nestjs/common';
import { MockServiceInterface } from 'mocks/controller/mocks.interface';
import { HttpAction, MockRequest, MockResponse } from 'mocks/mock-interface-types/mock-request.interface';
import { httpGetWorkResponseType } from 'mocks/work-response-type-guard/work-response.type-guard';

@Injectable()
export class MsEspmWorks implements MockServiceInterface {
    computeMockResponseBehaviour(mockRequest: MockRequest<any>): any {
        return [
            {
                urlRegExp: /works\/myworks/,
                httpOperation: 'GET',
                computeResponse: (): httpGetWorkResponseType => {
                    return {
                        workID: 'workID',
                        createDate: new Date('05.02.1999'),
                        workName: 'Mocked work name',
                        protocolNo: 52,
                    };
                },
            },
        ];
    }
}
