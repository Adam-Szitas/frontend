import { combineReducers } from '@ngrx/store';
import { CompanyState } from '../interfaces/company/company.interfaces';
import { companyDataReducer } from './company/company.reducers';
import { userCredentialsReducer, UserState } from './user-credentials/user.reducer';

export interface State {
    user: UserState;
    company: CompanyState;
}

export const FEATURE_NAME_STATE = 'state';

export const Reducer = combineReducers<State>({
    user: userCredentialsReducer,
    company: companyDataReducer,
});
