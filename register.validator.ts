import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        let password = registrationFormGroup.controls.password.value;
        let cPassword = registrationFormGroup.controls.cPassword.value;

        if (cPassword.length <= 0) {
            return null;
        }

        if (cPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}