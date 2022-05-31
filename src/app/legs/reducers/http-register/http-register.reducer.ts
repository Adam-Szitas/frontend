import { Action, createReducer, on } from '@ngrx/store';
import { HttpRegisterResponseType } from 'src/app/type-guards/register-type-guards/register-response.type-guards';

export interface HttpRegisterResponseState {
    credentials: HttpRegisterResponseType | null;
}

const initialState: HttpRegisterResponseState | null = {
    credentials: null,
};

const reducer = createReducer<HttpRegisterResponseType>(
    initialState,
    on(httpRegisterResponseActions.updateCredentials, (state: HttpRegisterResponseState, { credentials }): HttpRegisterResponseType => {
        return {
            ...state,
            credentials,
        };
    })
);

export function httpRegisterReducer(state: HttpRegisterResponseType | null, action: Action): HttpRegisterResponseType | null {
    return reducer(state, action);
}
