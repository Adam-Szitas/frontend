import { createSelector } from '@ngrx/store';
import { CompanyState } from '../../interfaces/company/company.interfaces';
import { State } from '../../reducers/reducer';
import { getState } from '../selector';

const getCompanyState = createSelector(getState, (state: State): CompanyState => state['company']);

const getCompanyName = createSelector(getCompanyState, (companyState: CompanyState): string | null => {
    return companyState.companyName ?? null;
});

const getCompanyId = createSelector(getCompanyState, (companyState: CompanyState): number | null => {
    return companyState.companyId ?? null;
});

export const CompanySelectors = {
    getCompanyName,
    getCompanyId,
};
