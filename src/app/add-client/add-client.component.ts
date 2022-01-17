import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  data = {
    name: '',
    email: '',
    billingType: '',
    rate: 0
  };

  constructor(public dialogRef: MatDialogRef<AddClientComponent>) {}

  submitForm(): void {
    if (this.data.name && this.data.email && this.data.billingType && this.data.rate > 0) {
      this.dialogRef.close(this.data);
    }
  }

  ngOnInit(): void {
  }

}
