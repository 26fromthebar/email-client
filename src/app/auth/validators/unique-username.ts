import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) {}

  validate = (control: AbstractControl) => {
    const value = control.value;

    return this.auth.usernameAvailable(value).pipe(
      map((data) => null),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
