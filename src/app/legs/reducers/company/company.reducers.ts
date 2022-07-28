import { Action, createReducer, on } from '@ngrx/store';
import { CompanyActions } from '../../actions/company/company.actions';
import { CompanyState } from '../../interfaces/company/company.interfaces';

const initialState: CompanyState = {
    companyName: 'Delux s. r. o.',
    companyId: 18,
    companyAddress: null,
};

const reducer = createReducer(
    initialState,
    on(CompanyActions.setCompanyData, (state: CompanyState, { companyData }): CompanyState => {
        return {
            ...state,
            companyId: companyData.companyId,
            companyName: companyData.companyName,
            companyAddress: null,
        };
    })
);

export function companyDataReducer(state: CompanyState | undefined, action: Action): CompanyState {
    return reducer(state, action);
}
