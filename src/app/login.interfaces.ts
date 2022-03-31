import { OrientationCustomType } from './ui-components/ui-types';

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
  direction: OrientationCustomType;
  form: FormInputGroup;
}

interface FormInputGroup {
  formGroup: any;
}
