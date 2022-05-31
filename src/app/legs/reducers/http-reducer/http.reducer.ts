import { combineReducers } from '@ngrx/store';
import { HttpRegisterResponseType } from 'src/app/type-guards/register-type-guards/register-response.type-guards';
import { httpRegisterReducer } from '../http-register/http-register.reducer';

export const FEATUER_NAME_HTTP = 'http';

interface HttpState {
    'espm-register': HttpRegisterResponseType | null;
}

export const httpReducer = combineReducers<HttpState>({
    'espm-register': httpRegisterReducer,
});
