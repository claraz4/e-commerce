import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const errors: ValidationErrors = {};

    // Regular expressions for validation
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    // Check password length and other requirements
    if (value.length < 8) {
      errors['minLength'] = 'Password must be at least 8 characters long.';
    }
    if (!hasUpperCase) {
      errors['upperCase'] = 'Password must contain at least one uppercase letter.';
    }
    if (!hasLowerCase) {
      errors['lowerCase'] = 'Password must contain at least one lowercase letter.';
    }
    if (!hasNumbers) {
      errors['numbers'] = 'Password must contain at least one number.';
    }
    if (!hasSpecialChars) {
      errors['specialChar'] = 'Password must contain at least one special character.';
    }

    // If there are errors, return the error object; otherwise, return null
    return Object.keys(errors).length > 0 ? errors : null;
  };
}
