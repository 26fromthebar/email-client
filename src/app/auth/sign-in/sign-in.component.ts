import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) return;

    this.auth.signin(this.authForm.value).subscribe({
      next: () => {
        console.log('Success!!');
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (err.status === 0) {
          this.authForm.setErrors({
            noConnection: true,
          });
        } else if (err.username || err.password) {
          this.authForm.setErrors({ credentials: true });
        }
      },
    });
  }
}
