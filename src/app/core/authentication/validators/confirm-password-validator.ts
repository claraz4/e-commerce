import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
  return (confirmPasswordControl: AbstractControl): ValidationErrors | null => {
    const passwordValue = passwordControl.value;
    const confirmPasswordValue = confirmPasswordControl.value;

    // If both are the same, it's valid; otherwise, return an error
    return passwordValue === confirmPasswordValue ? null : { 'passwordMismatch': 'Passwords do not match!' };
  };
}
