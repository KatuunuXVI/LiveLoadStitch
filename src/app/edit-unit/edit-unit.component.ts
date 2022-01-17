import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUnitComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  submitForm(): void {
    if (this.data.name && this.data.address) {
      this.dialogRef.close(this.data);
    }
  }

  ngOnInit(): void {
  }

}
