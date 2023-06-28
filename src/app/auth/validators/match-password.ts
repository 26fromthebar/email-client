import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl) {
    const { password, passwordConfirmation } = control.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return {
        passwordAndPasswordConfirmationMatch: true,
        message: 'Password and password confirmation must be identical!',
      };
    }
  }
}
