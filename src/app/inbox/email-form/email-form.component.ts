import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from 'src/app/shared/interfaces/email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  emailForm!: FormGroup;
  @Output() emailSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const { subject, text, to, from } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) return;

    console.log(this.emailForm.getRawValue());

    this.emailSubmit.emit(this.emailForm.value);
  }
}
