import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthService as SocialAuthService, FacebookLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router, public dialog: MatDialog,
              private socialAuthService: SocialAuthService) {
  }

  login(): void {
    console.log(this.username, this.password);
    this.router.navigate(['home']);
  }

  loginWithFacebook(): void {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      }
    );
  }
}
