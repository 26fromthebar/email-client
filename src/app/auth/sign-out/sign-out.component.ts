import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.auth.signout().subscribe((data) => {
      // Navigate the user to a more meaningful page
      this.route.navigateByUrl('/');
    });
  }
}
