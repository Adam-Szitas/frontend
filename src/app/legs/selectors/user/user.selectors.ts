import { createSelector } from '@ngrx/store';
import { State } from '../../reducers/reducer';
import { UserPermission, UserState } from '../../reducers/user-credentials/user.reducer';
import { getState } from '../selector';

const getUserCredentialState = createSelector(getState, (state: State): UserState => state['user']);

const getUserCredentials = createSelector(getUserCredentialState, (state: UserState): UserState => state);

const getUserRole = createSelector(getUserCredentials, (userCredentials: UserState): UserPermission | null => userCredentials.permission);
const getUserId = createSelector(getUserCredentials, (userCredentials: UserState): number | null => userCredentials.userId);

export const UserCredentialsSelectors = {
    getUserCredentials,
    getUserRole,
    getUserId,
};
