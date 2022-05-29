import { ValidatorFn } from '@angular/forms';
import { DirectionType, OrientationCustomType } from './ui-components/ui-types';

export interface LoginCredentials {
    userName: string;
    password: string;
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
    form: FormInputGroup;
}

interface FormInputGroup {
    formControlInputs: FormControlInput[];
}

interface FormControlInput {
    id: string;
    dataCy?: string;
    placeHolder?: string;
    value?: string | number | Date;
    controlName: string;
    validatorFn: ValidatorFn[];
    label?: string;
}
