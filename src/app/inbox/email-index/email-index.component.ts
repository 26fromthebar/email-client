import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { EmailSummary } from 'src/app/shared/interfaces/email-summary';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails: EmailSummary[] = [];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((data: EmailSummary[]) => {
      this.emails = data;
    });
  }
}
