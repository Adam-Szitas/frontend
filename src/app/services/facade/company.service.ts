import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/legs/reducers/user-credentials/user.reducer';
import { UserCredentialsSelectors } from 'src/app/legs/selectors/user/user.selectors';

@Injectable({
    providedIn: 'root',
})
export class UserFacadeService {
    constructor(private store$: Store) {}

    // public get companyData() {
    //   return {
    //     company: {
    //       companyId$: (): Observable<string | null> => this.store$.select(CompanyDataSelectors.getCompanyId)
    //     }
    //   }
    // }
}
