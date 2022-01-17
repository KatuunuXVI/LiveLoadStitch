import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  code = '';
  username = '';

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  showError(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-snackbar'];
    config.duration = 4000;
    this.snackBar.open('Verification Error: ' + message, undefined, config);
  }

  showSuccess(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['success-snackbar'];
    config.duration = 4000;
    this.snackBar.open(message, undefined, config);
  }

  attemptVerification(): void {
    if (!this.code) {
      this.showError('No code supplied.');
      return;
    }

    if (!this.username) {
      this.showError('No username supplied in URL.');
      return;
    }

    Auth.confirmSignUp(this.username, this.code).then(() => {
      this.router.navigate(['']);
    }).catch(err => {
      console.log(err);
      this.showError(err.message);
    });

  }

  resendEmail(): void {
    if (!this.username) {
      this.showError('No username supplied in URL. Check your email for the correct link.');
      return;
    }

    Auth.resendSignUp(this.username).then(succ => {
      this.showSuccess('Sucessfully resent verification email.');
    }).catch(err => {
      console.log(err);
      this.showError(err.message);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params.us;
    });
  }

}
