import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EditUserComponent} from '../edit-user/edit-user.component';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {

  users = [
    {name: 'John Smith', role: 'Site Admin', email: 'johnsmith@mail.com'},
    {name: 'Ryan Porter', role: 'Site Admin', email: 'ryanporter@mail.com'},
    {name: 'Aubrey Dean', role: 'Site Operator', email: 'aubreydean@mail.com'},
    {name: 'Caden Gordon', role: 'Site Operator', email: 'cadengordon@mail.com'},
    {name: 'Leslie Wright', role: 'Site Operator', email: 'lesliewright@mail.com'}
  ];

  allUnits = [
    {name: 'Unit #ABCD', address: '0123 First St'},
    {name: 'Unit #EFGH', address: '4567 Second St'},
    {name: 'Unit #IJKL', address: '8910 Third St'},
    {name: 'Unit #MNOP', address: '1112 Fourth St'},
    {name: 'Unit #QRST', address: '1314 Fifth St'}
  ];

  siteUnits = [
    {name: 'Unit #1234', address: '5678 Main St'},
    {name: 'Unit #9101', address: '1112 East Rd'},
    {name: 'Unit #1314', address: '1516 South Dr'}
  ];

  constructor(
    public dialogRef: MatDialogRef<EditSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  addUnit(unit): void {
    this.siteUnits.push(unit);
    this.removeFromArray(this.allUnits, unit);
  }

  removeUnit(unit): void {
    this.allUnits.push(unit);
    this.removeFromArray(this.siteUnits, unit);
  }

  removeFromArray(arr, obj): void {
    for (let i = arr.length - 1; i >= 0; --i) {
      if (arr[i] === obj) {
        arr.splice(i, 1);
      }
    }
  }

  submitForm(): void {
    if (this.data.sitename) {
      this.dialogRef.close(this.data);
    }
  }

  delete(): void {
    this.dialogRef.close({delete: true});
  }

  ngOnInit(): void {
  }

}
