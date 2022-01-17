import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-truck',
  templateUrl: './edit-truck.component.html',
  styleUrls: ['./edit-truck.component.css']
})
export class EditTruckComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTruckComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  submitForm(): void {
    if (this.data.license_plate && this.data.color && this.data.axles > 0) {
      this.dialogRef.close(this.data);
    }
  }

  delete(): void {
    this.dialogRef.close({delete: true});
  }

  ngOnInit(): void {
  }

}
