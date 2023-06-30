import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(
      'Guard checking: User is signed in:',
      this.auth.signedIn$.value
    );
    return this.auth.signedIn$.pipe(
      tap((authenticated) => {
        if (!authenticated) this.router.navigateByUrl('/auth/signup');
      })
    );
  }
}
