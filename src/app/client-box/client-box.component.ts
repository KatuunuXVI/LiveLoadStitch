import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditUnitComponent} from '../edit-unit/edit-unit.component';
import {MatDialog} from '@angular/material/dialog';
import {EditClientComponent} from '../edit-client/edit-client.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClientsService} from '../services/clients/clients.service';

@Component({
  selector: 'app-client-box',
  templateUrl: './client-box.component.html',
  styleUrls: ['./client-box.component.css', '../views/views.component.scss']
})
export class ClientBoxComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() email: string;
  @Input() billingType: string;
  @Input() rate: string;

  @Output() whenDelete = new EventEmitter();

  billingFormatted: string;
  rateFormatted: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '50%',
      panelClass: 'dialog-box',
      data: {name: this.name, email: this.email, billingType: this.billingType, rate: this.rate}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.delete) {
          this.whenDelete.emit(this.id);
        } else {
          const savedData = {id: this.id, name: this.name, email: this.email, billingType: this.billingType, rate: this.rate};

          result.id = this.id;
          this.clServ.editClient(result);

          const snackBarRef = this.snackBar.open('Edited Client: ' + this.name, 'Undo');

          snackBarRef.onAction().subscribe(() => {
            this.clServ.editClient(savedData);
          });
        }
      }
    });
  }

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private clServ: ClientsService) { }

  public formatStrings(): void {
    if (this.billingType === 'hour') {
      this.billingFormatted = 'Per Hour';
    } else {
      this.billingFormatted = 'Per Load';
    }

    this.rateFormatted = '$' + this.rate + '/' + this.billingType;
  }

  ngOnInit(): void {
    this.formatStrings();
  }

}
