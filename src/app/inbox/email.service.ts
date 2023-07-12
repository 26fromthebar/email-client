import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSummary } from '../shared/interfaces/email-summary';
import { Email } from '../shared/interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post(`${this.rootUrl}/emails`, email);
  }
}
