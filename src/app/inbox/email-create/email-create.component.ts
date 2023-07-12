import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from 'src/app/shared/interfaces/email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showmodal = false;
  email: Email;

  constructor(private auth: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: `${this.auth.username}@angular-email.com`,
      html: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showmodal = false;
    });
  }
}
