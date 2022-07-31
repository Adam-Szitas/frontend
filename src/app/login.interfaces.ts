import { ValidatorFn } from '@angular/forms';
import { UserState } from './legs/reducers/user-credentials/user.reducer';
import { DirectionType, OrientationCustomType } from './ui-components/ui-types';

export interface LoginCredentials {
    userName: string | null;
    password: string | null;
}
export interface ValidationMessages {
    minLength?: string;
    maxLength?: string;
    required?: string;
}

export interface FormInput {
    formGroupName: string;
    position: OrientationCustomType;
    direction: DirectionType;
}

export interface FormControlInput {
    id: string;
    dataCy?: string;
    placeHolder: string | null;
    value?: string | number | Date;
    controlName: string;
    validatorFn: ValidatorFn[];
    label: string;
    type?: InputTypes;
    default?: string;
}

export type InputTypes = 'text' | 'password' | 'date'; //TODO extend

export interface LoginResponse extends UserState {
    success: boolean;
    jwt_token: string;
}
