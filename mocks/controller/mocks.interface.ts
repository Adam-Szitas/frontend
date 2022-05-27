import { MockRequest } from 'mocks/mock-interface-types/mock-request.interface';

export interface MockServiceInterface {
    computeMockResponseBehaviour(mockRequest: MockRequest<any>): any;
}
