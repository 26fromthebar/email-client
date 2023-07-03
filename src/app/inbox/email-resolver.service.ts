import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Email } from '../shared/interfaces/email';
import { EmailService } from './email.service';
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['id'];

    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');

        return EMPTY;
      })
    );

    // return {
    //   id: '16347ghdjhf87328',
    //   subject: 'Hello mate',
    //   text: 'This is the email content',
    //   to: 'recipient@example.com',
    //   from: 'sender@example.com',
    //   html: '<p>This is the email content</p>',
    // };
  }
}
