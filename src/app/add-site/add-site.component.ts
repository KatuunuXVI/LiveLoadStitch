import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {

  sitename = '';
  users = [];

  allUnits = [
    {name: 'Unit #ABCD', address: '0123 First St'},
    {name: 'Unit #EFGH', address: '4567 Second St'},
    {name: 'Unit #IJKL', address: '8910 Third St'},
    {name: 'Unit #MNOP', address: '1112 Fourth St'},
    {name: 'Unit #QRST', address: '1314 Fifth St'}
  ];

  siteUnits = [];

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

  constructor(public dialogRef: MatDialogRef<AddSiteComponent>) { }

  submitForm(): void {
    if (this.sitename) {
      this.dialogRef.close({sitename: this.sitename});
    }
  }

  ngOnInit(): void {
  }

}
