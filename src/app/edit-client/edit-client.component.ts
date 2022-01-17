import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditClientComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  submitForm(): void {
    if (this.data.name && this.data.email && this.data.billingType && this.data.rate >= 0) {
      this.dialogRef.close(this.data);
    }
  }

  delete(): void {
    this.dialogRef.close({delete: true});
  }

  ngOnInit(): void {
  }

}
