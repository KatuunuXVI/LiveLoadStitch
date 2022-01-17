import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  // async attemptLogin(): Promise<any> {
  //   try {
  //     const user = await Auth.signIn(this.username, this.password);
  //     console.log(user);
  //     Auth.currentSession().then(res => {
  //       console.log(res);
  //       let accessToken = res.getAccessToken();
  //       let jwt = accessToken.getJwtToken();
  //       //You can print them to see the full objects
  //       console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
  //       console.log(`myJwt: ${jwt}`);
  //     });
  //   } catch (error) {
  //     console.log('error signing in', error);
  //   }
  // }

  showError(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-snackbar'];
    config.duration = 4000;
    this.snackBar.open('Login Error: ' + message, undefined, config);
  }

  attemptLogin(): void {
    
    if (!this.username) {
      this.showError('No username supplied.');
      return;
    }

    if (!this.password) {
      this.showError('No password supplied.');
      return;
    }
    
    Auth.signIn(this.username, this.password).then((user) => {
      Auth.currentSession().then(sessionData => {
        console.log(this.username);
        localStorage.setItem('token', sessionData.getAccessToken().getJwtToken());
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/main']);
      }).catch((err) => {
        this.showError(err.message);
      });
    }).catch((err) => {
      this.showError(err.message);
    });
    // Auth.signUp({
    //   username: this.username,
    //   password: this.password,
    //   attributes: {email: 'wpledig@gmail.com'}
    // }).then(res => {
    //   console.log(res);
    // });
    // Auth.confirmSignUp(this.username, '458837').then(res => {
    //   console.log(res);
    // });
    // const token = 'token';
    // localStorage.setItem('token', token);
  }

  ngOnInit(): void {
  }

}
