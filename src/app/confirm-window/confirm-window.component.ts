import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Auth } from 'aws-amplify';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.css']
})
export class ConfirmWindowComponent implements OnInit {

  confirmCode: string;

  constructor(public dialogRef: MatDialogRef<ConfirmWindowComponent>, private snackBar: MatSnackBar) { }

  showError(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-snackbar'];
    config.duration = 4000;
    this.snackBar.open('Verification Error: ' + message, undefined, config);
  }

  submitForm(): void {
    if (this.confirmCode) {
      Auth.verifyCurrentUserAttributeSubmit('email', this.confirmCode).then(succ => {
        this.dialogRef.close();
      }).catch(err => {
        this.showError(err.message);
      });
    }
  }


  ngOnInit(): void {
  }

}
