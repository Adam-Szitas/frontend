import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginActions } from 'src/app/legs/actions/login/login.actions';
import { UserState } from 'src/app/legs/reducers/user-credentials/user.reducer';
import { UserCredentialsSelectors } from 'src/app/legs/selectors/user/user.selectors';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    constructor(private store$: Store) {}

    public get userData() {
        return {
            userCredentials: {
                userCredentials$: ((): Observable<UserState> => this.store$.select(UserCredentialsSelectors.getUserCredentials))(),
                userId$: ((): Observable<number | null> => this.store$.select(UserCredentialsSelectors.getUserId))(),
                setUserCredentials: (userCredentials: UserState) => this.store$.dispatch(LoginActions.setCredentials({ userCredentials })),
            },
        };
    }
}
