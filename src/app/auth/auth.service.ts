import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, tap } from 'rxjs';
import { SignupCredentials } from '../shared/interfaces/signup-credentials';
import { SignupResponse } from '../shared/interfaces/signup-response';
import { SignedInResponse } from '../shared/interfaces/signed-in-response';
import { SigninCredentials } from '../shared/interfaces/signin-credentials';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false);
  username = '';

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
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap((response) => {
          this.username = response.username;
          this.signedIn$.next(true);
        })
      );
  }

  checkAuthStatus() {
    return this.http
      .get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap((response) => {
          this.signedIn$.next(response.authenticated);
          this.username = response.username;
        })
      );
  }

  signout() {
    return this.http.post<any>(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http
      .post<SignedInResponse>(`${this.rootUrl}/auth/signin`, {
        credentials,
      })
      .pipe(
        tap((response) => {
          this.username = response.username;
          this.signedIn$.next(true);
        })
      );
  }
}
