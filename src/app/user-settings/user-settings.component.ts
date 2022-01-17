import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  profilePicture: File;
  password: string;
  confirmPass: string;
  oldPass: string;

  constructor(public dialogRef: MatDialogRef<UserSettingsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  updatePicture(event): void {
    if (event) {
      // this.profilePicture = event.
      console.log(event);
    } else {
      this.profilePicture = null;
    }
  }

  submitForm(): void {
    if (this.data.username && this.data.email && this.password === this.confirmPass &&
        ((this.password && this.oldPass) || !this.password)) {
      this.dialogRef.close({
        username: this.data.username,
        email: this.data.email,
        password: this.password,
        oldPass: this.oldPass,
        profilePicture: this.profilePicture
      });
    }
  }

  ngOnInit(): void {
  }

}
