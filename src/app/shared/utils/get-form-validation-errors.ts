import { FormGroup, ValidationErrors } from '@angular/forms';

export function getFormValidationErrors(form: FormGroup) {

  const result: { control: string; error: string; value: any; }[] = [];
  Object.keys(form.controls).forEach(key => {
    const control = form.get(key); // Get the control once

    // Check if control exists and has errors
    if (control && control.errors) {
      const controlErrors: ValidationErrors = control.errors;

      // Loop through the errors and push them to the result array
      Object.keys(controlErrors).forEach(keyError => {
        result.push({
          'control': key,
          'error': keyError,
          'value': controlErrors[keyError]
        });
      });
    }
  });

  return result;
}
