import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username = '';
  email = '';
  password = '';
  passwordV = '';

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  showError(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-snackbar'];
    config.duration = 4000;
    this.snackBar.open('Signup Error: ' + message, undefined, config);
  }

  attemptSignup(): void {
    if (!this.email) {
      this.showError('No email supplied.');
      return;
    }

    if (!this.username) {
      this.showError('No username supplied.');
      return;
    }

    if (!this.password) {
      this.showError('No password supplied.');
      return;
    }

    if (this.password !== this.passwordV) {
      this.showError('Passwords do not match.');
      return;
    }

    Auth.signUp({
      username: this.username,
      password: this.password,
      attributes: {email: this.email}
    }).then(res => {
      this.router.navigate(['/verify'], {queryParams: {us: this.username}});
    }).catch(err => {
      this.showError(err.message);
    });


  }

  ngOnInit(): void {
  }

}
