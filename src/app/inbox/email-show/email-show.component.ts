import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { Email } from 'src/app/shared/interfaces/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    // this.email = this.route.snapshot.data['email'];

    this.route.data.subscribe((data) => {
      this.email = data['email'];
    });
  }

  ngOnInit(): void {}
}
