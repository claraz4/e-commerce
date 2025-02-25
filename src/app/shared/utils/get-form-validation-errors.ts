import { FormGroup, ValidationErrors } from '@angular/forms';

const errorMessages = {
  "required": "Required fields are missing.",
  "email": "Incorrect email address."
}

export function getFormValidationErrors(form: FormGroup) {
  const result: { [key: string]: string } = { };
  Object.keys(form.controls).forEach(key => {
    const control = form.get(key); // Get the control once

    // Check if control exists and has errors
    if (control && control.errors) {
      const controlErrors: ValidationErrors = control.errors;

      // Loop through the errors and push them to the result array
      Object.keys(controlErrors).forEach(keyError => {
        if (keyError === "required") {
          // specify that at least one key is missing
          result[keyError] = errorMessages.required;
          result[key] = "required";
        } else if (keyError === "email") {
          result[key] = errorMessages.email;
        } else if (!result.hasOwnProperty(key)) {
          result[key] = controlErrors[keyError];
        }
      });
    }
  });

  return result;
}
