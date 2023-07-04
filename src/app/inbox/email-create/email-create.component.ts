import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/shared/interfaces/email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showmodal = false;
  email: Email;

  constructor() {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: '1312gelinio1312@angular-email.com',
      html: '',
    };
  }

  ngOnInit(): void {}
}
