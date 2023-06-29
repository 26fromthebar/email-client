import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SignupCredentials } from '../shared/interfaces/signup-credentials';
import { SignupResponse } from '../shared/interfaces/signup-response';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(usernameValue: string) {
    return this.http.post<{ available: boolean }>(
      `${this.rootUrl}/auth/username`,
      {
        username: usernameValue,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuthStatus() {
    return this.http
      .get<any>(`${this.rootUrl}/auth/signedin`, { withCredentials: true })
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }
}
