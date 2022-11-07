import { FormControl } from '@angular/forms';

export function EmailValidator(confirmEmailInput: string) {
  let confirmEmailControl: FormControl;
  let emailControl: FormControl;

  return (control: FormControl) => {
    if (!control.parent) {
      return null;
    }

    if (!confirmEmailControl) {
      confirmEmailControl = control;
      emailControl = control.parent.get(confirmEmailInput) as FormControl;
      emailControl.valueChanges.subscribe(() => {
        confirmEmailControl.updateValueAndValidity();
      });
    }

    // Si son diferentes y el emailcontrol es valido marcar error
    if (
      emailControl.value.toLocaleLowerCase() !==
      confirmEmailControl.value.toLocaleLowerCase() && emailControl.valid
    ) {
      return { notMatch: true };
    }

    return null;
  };
}
