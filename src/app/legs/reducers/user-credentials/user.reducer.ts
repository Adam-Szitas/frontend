import { Action, createReducer, on } from '@ngrx/store';
import { LoginActions } from '../../actions/login/login.actions';

export interface UserState {
    userName: string | null;
    userId: number | null;
    permission: UserPermission | null;
}

const initialState: UserState = {
    userName: null,
    userId: null,
    permission: null,
};

export type UserPermission = 'ADMIN' | 'OPERATOR' | 'TECHNICIAN' | 'SUBCONTRACTER';

const reducer = createReducer(
    initialState,
    on(LoginActions.setCredentials, (state: UserState, { userCredentials }): UserState => {
        return {
            ...state,
            userName: userCredentials.userName,
            userId: userCredentials.userId,
            permission: userCredentials.permission,
        };
    })
);

export function userCredentialsReducer(state: UserState | undefined, action: Action): UserState {
    return reducer(state, action);
}
