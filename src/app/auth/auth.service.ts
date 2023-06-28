import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(usernameValue: string) {
    return this.http.post<{ available: boolean }>(
      'https://api.angular-email.com/auth/username',
      {
        username: usernameValue,
      }
    );
  }
}
