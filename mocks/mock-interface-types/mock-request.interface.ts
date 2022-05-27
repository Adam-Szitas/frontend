export type HttpAction = 'DELETE' | 'GET' | 'POST' | 'PUT';

export interface MockRequest<requestType> {
    actualHttpAction: HttpAction;
    actualUrl: string;
    mockConfig: MockConfig;
    actualRequest: requestType;
    queryParams: Record<string, string>;
}

export interface MockConfig {
    getUseCase: httpGetUseCaseType;
}

export type httpGetUseCaseType = 'work' | 'offer' | 'profile';

export interface MockResponse<responseType> {
    actualResponse: responseType;
    mockConfig: MockConfig;
}
