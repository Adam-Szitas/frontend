import { ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlInput } from 'src/app/login.interfaces';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnChanges {
    public registerForm: FormGroup = new FormGroup({
        companyName: new FormControl('', [Validators.required, Validators.min(5)]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required]),
        businessId: new FormControl(''),
        taxId: new FormControl(''),
        vatId: new FormControl(''),
        zipCode: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        address: new FormControl(''),
    });

    public formControlInputs: FormControlInput[] = [
        {
            id: 'company_name',
            label: 'COMPANY.REGISTER.COMPANY_NAME',
            placeHolder: 'COMPANY.REGISTER.COMPANY_NAME',
            controlName: 'companyName',
            validatorFn: [Validators.required, Validators.min(5)],
        },
        {
            id: 'mail',
            label: 'COMPANY.REGISTER.EMAIL',
            placeHolder: 'COMPANY.REGISTER.EMAIL',
            controlName: 'mail',
            validatorFn: [Validators.required, Validators.email],
        },
        {
            id: 'phone',
            label: 'COMPANY.REGISTER.PHONE',
            placeHolder: 'COMPANY.REGISTER.PHONE',
            controlName: 'phone',
            validatorFn: [],
        },
        {
            id: 'business_id',
            label: 'COMPANY.REGISTER.BUSINESS_ID',
            placeHolder: 'COMPANY.REGISTER.BUSINESS_ID',
            controlName: 'businessId',
            validatorFn: [],
        },
        {
            id: 'tax_id',
            label: 'COMPANY.REGISTER.TAX_ID',
            placeHolder: 'COMPANY.REGISTER.TAX_ID',
            controlName: 'taxId',
            validatorFn: [],
        },
        {
            id: 'vat',
            label: 'COMPANY.REGISTER.VAT',
            placeHolder: 'COMPANY.REGISTER.VAT',
            controlName: 'vatId',
            validatorFn: [],
        },
        {
            id: 'zip_code',
            label: 'COMPANY.REGISTER.ZIP_CODE',
            placeHolder: 'COMPANY.REGISTER.ZIP_CODE',
            controlName: 'zipCode',
            validatorFn: [],
        },
        {
            id: 'country',
            label: 'COMPANY.REGISTER.COUNTRY',
            placeHolder: 'COMPANY.REGISTER.COUNTRY',
            controlName: 'country',
            validatorFn: [],
        },
        {
            id: 'city',
            label: 'COMPANY.REGISTER.CITY',
            placeHolder: 'COMPANY.REGISTER.CITY',
            controlName: 'city',
            validatorFn: [],
        },
        {
            id: 'address',
            label: 'COMPANY.REGISTER.ADDRESS',
            placeHolder: 'COMPANY.REGISTER.ADDRESS',
            controlName: 'address',
            validatorFn: [],
        },
    ];

    public isFormValid: boolean = false;

    ngOnChanges() {
        this.isFormValid = this.registerForm.valid;
    }

    constructor() {}

    public onSubmitForm() {}
}
