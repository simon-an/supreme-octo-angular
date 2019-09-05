import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '~core/services/auth.service';
import { LoginData } from '~core/dto/login-data';
import { User } from '~core/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'cool-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLandingPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginAdmin() {
    const loginData: LoginData = {
      email: 'test@coolsafe.de',
      role: 'Administrator'
    };

    this.authService.login(loginData).subscribe(
      (user: User | null) => {
        if (user) {
          this.router.navigate(['/admin']);
        }
      }
    );
  }

  loginUser() {
    const loginData: LoginData = {
      email: 'test@coolsafe.de',
      role: 'Customer'
    };

    this.authService.login(loginData).subscribe(
      (user: User | null) => {
        if (user) {
          this.router.navigate(['/user']);
        }
      }
    );
  }

}
