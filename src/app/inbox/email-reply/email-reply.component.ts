import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from 'src/app/shared/interfaces/email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit, OnChanges {
  showmodal: boolean = false;
  @Input() email!: Email;

  constructor(private auth: AuthService, private emailService: EmailService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------${this.email.from} wrote:\n>${this.email.text}`,
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showmodal = false;
    });
  }
}
