import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';
import {MatDialog} from '@angular/material/dialog';
import {EditTruckComponent} from '../edit-truck/edit-truck.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TrucksService} from '../services/survey/trucks.service';

@Component({
  selector: 'app-editbuttonrenderer',
  templateUrl: './editbuttonrenderer.component.html',
  styleUrls: ['./editbuttonrenderer.component.css']
})
export class EditbuttonrendererComponent implements ICellRendererAngularComp {
  public params: any;
  private savedData: any;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private tServ: TrucksService) { }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  openDialog(): void {
    this.savedData = Object.assign({}, this.params.data);
    const dialogRef = this.dialog.open(EditTruckComponent, {
      width: '50%',
      panelClass: 'dialog-box',
      data: this.params.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.delete) {
          this.params.api.applyTransaction({remove: [this.params.data]});
          this.tServ.removeTruck(this.params.data.truck_id);

          const snackBarRef = this.snackBar.open('Removed Truck: ' + this.params.data.license_plate, 'Undo');
          snackBarRef.onAction().subscribe(() => {
            this.params.api.applyTransaction({add: [this.params.data]});
            this.tServ.addTruck(this.params.data);
          });

        } else {
          this.params.api.applyTransaction({update: [result]});
          this.tServ.editTruck(result);

          const snackBarRef = this.snackBar.open('Edited Truck: ' + result.license_plate, 'Undo');

          snackBarRef.onAction().subscribe(() => {
            this.updateTruckData(this.savedData, result);
            this.params.api.applyTransaction({update: [result]});
            this.tServ.editTruck(result);
          });
        }
      }
    });
  }

  updateTruckData(source, destination): void {
    destination.truck = source.truck;
    destination.tag = source.tag;
    destination.color = source.color;
    destination.axles = source.axles;
  }

}
