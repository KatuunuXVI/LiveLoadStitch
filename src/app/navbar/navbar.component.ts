import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MessageDialogComponent} from '../message-dialog/message-dialog.component';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';
import {UserSettingsComponent} from '../user-settings/user-settings.component';
import {Router} from '@angular/router';
import { Auth } from 'aws-amplify';
import {UsersService} from '../services/users/users.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {ConfirmWindowComponent} from '../confirm-window/confirm-window.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username = '';
  email = '';
  profileSrc = '/assets/Portrait_Placeholder.png';
  notifications = null;

  constructor(private dialog: MatDialog, public router: Router, private uServ: UsersService, private snackBar: MatSnackBar) { }

  openMessages(): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '50%',
      panelClass: 'dialog-box'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  openNotifications(): void {

    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '50%',
      panelClass: 'dialog-box'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  showError(message): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['error-snackbar'];
    config.duration = 6000;
    this.snackBar.open('User Settings Update Error: ' + message, undefined, config);
  }

  openSettings(): void {
    const dialogRef = this.dialog.open(UserSettingsComponent, {
      width: '50%',
      panelClass: 'dialog-box',
      data: {username: this.username, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.email !== result.email) {
          this.uServ.updateEmail(result.email)
              .then(succ => {
                this.email = result.email;
                this.dialog.open(ConfirmWindowComponent, {
                      width: '30%',
                      panelClass: 'dialog-box',
                      disableClose: true
                });
              })
              .catch(fail => {
                this.showError(fail.message);
              });
        }

        if (result.password && result.oldPass) {
            this.uServ.updatePassword(result.oldPass, result.password)
                .then(succ => {
                    console.log(succ);
                })
                .catch(err => {
                    this.showError(err.message);
                });
        }

        this.username = result.username;
      }
    });
  }

  logOut(): void {
    Auth.signOut({ global: true }).then(res => {
      localStorage.setItem('token', '');
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {
    this.uServ.getCurrentUserInfo().then(userInfo => {
      this.username = userInfo.username;
      this.email = userInfo.attributes.email;
      console.log('User Info: ' + JSON.stringify(userInfo));
    });
  }

}
