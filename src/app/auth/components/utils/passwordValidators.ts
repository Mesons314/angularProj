import { FormGroup } from "@angular/forms";
export function passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPasswordControl = form.get('confirmPassword');
    const confirmPassword = confirmPasswordControl?.value;

    if (!confirmPasswordControl) {
        return;
    }

    const currentErrors = confirmPasswordControl.errors || {};
    const { passwordMismatch, ...otherErrors } = currentErrors;

    if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ ...otherErrors, passwordMismatch: true });
    } else {
        confirmPasswordControl.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
    }
}
