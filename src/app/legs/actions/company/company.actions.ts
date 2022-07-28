import { createAction, props } from '@ngrx/store';
import { CompanyState } from '../../interfaces/company/company.interfaces';

export const CompanyActions = {
    setCompanyData: createAction('[company: data] set company data', props<{ companyData: CompanyState }>()),
};
