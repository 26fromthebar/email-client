import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // For use with standard property reference
  // signedIn: boolean = false;

  // For use with the "async" pipe
  signedIn$: BehaviorSubject<boolean>;

  constructor(private auth: AuthService) {
    // For use with the "async" pipe
    this.signedIn$ = this.auth.signedIn$;
  }

  ngOnInit(): void {
    // For use with standard property reference
    // this.auth.signedIn$.subscribe((data) => {
    //   console.log(data);
    //   this.signedIn = data;
    // });
  }
}
