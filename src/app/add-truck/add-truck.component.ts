import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent implements OnInit {

  data = {
    truck: '',
    tag: '',
    axles: 0,
    color: ''
  };

  constructor(public dialogRef: MatDialogRef<AddTruckComponent>) {}

  submitForm(): void {
    if (this.data.truck && this.data.color && this.data.tag && this.data.axles > 0) {
      this.dialogRef.close(this.data);
    }
  }

  ngOnInit(): void {
  }

}
