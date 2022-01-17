import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  submitForm(): void {
    if (this.data.name && this.data.email && this.data.role) {
      this.dialogRef.close(this.data);
    }
  }

  ngOnInit(): void {
  }

}
