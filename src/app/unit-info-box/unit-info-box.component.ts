import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditSiteComponent} from '../edit-site/edit-site.component';
import {MatDialog} from '@angular/material/dialog';
import {EditUnitComponent} from '../edit-unit/edit-unit.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UnitsService} from '../services/units/units.service';

@Component({
  selector: 'app-unit-info-box',
  templateUrl: './unit-info-box.component.html',
  styleUrls: ['./unit-info-box.component.scss', '../views/views.component.scss']
})
export class UnitInfoBoxComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() address: string;
  @Input() lastUsed: Date = new Date();
  @Input() loadCount: number;

  @Output() whenEdit = new EventEmitter();

  formmattedDate: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUnitComponent, {
      width: '50%',
      panelClass: 'dialog-box',
      data: {name: this.name, address: this.address},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const prevData = {id: this.id, name: this.name, address: this.address};
        this.name = result.name;
        this.address = result.address;
        result.id = this.id;
        this.uServ.editUnit(result);

        this.whenEdit.emit();

        const snackBarRef = this.snackBar.open('Edited Unit: ' + result.name, 'Undo');

        snackBarRef.onAction().subscribe(() => {
          this.name = prevData.name;
          this.address = prevData.address;
          this.uServ.editUnit(prevData);

          this.whenEdit.emit();
        });
      }
    });
  }

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private uServ: UnitsService) {}

  ngOnInit(): void {
    this.formmattedDate = this.lastUsed.toLocaleTimeString() + ', ' + this.lastUsed.toLocaleDateString();
  }

}
