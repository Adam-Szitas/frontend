import { createAction, props } from '@ngrx/store';
import { UserState } from '../../reducers/user-credentials/user.reducer';

export const LoginActions = {
    setCredentials: createAction('[user: credentials] set user credentials', props<{ userCredentials: UserState }>()),
};
