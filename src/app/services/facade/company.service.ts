import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/legs/reducers/user-credentials/user.reducer';
import { CompanySelectors } from 'src/app/legs/selectors/company/company.selectors';
import { UserCredentialsSelectors } from 'src/app/legs/selectors/user/user.selectors';

@Injectable({
    providedIn: 'root',
})
export class CompanyFacadeService {
    constructor(private store$: Store) {}

    public get companyData() {
        return {
            company: {
                companyId$: ((): Observable<number | null> => this.store$.select(CompanySelectors.getCompanyId))(),
                companyName$: ((): Observable<string | null> => this.store$.select(CompanySelectors.getCompanyName))(),
            },
        };
    }
}
