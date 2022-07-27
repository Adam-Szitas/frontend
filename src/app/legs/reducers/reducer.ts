import { combineReducers } from '@ngrx/store';
import { userCredentialsReducer, UserState } from './user-credentials/user.reducer';

export interface State {
    user: UserState;
}

export const FEATURE_NAME_STATE = 'state';

export const Reducer = combineReducers<State>({
    user: userCredentialsReducer,
});
