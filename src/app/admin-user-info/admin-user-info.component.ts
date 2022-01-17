import {Component, Input, OnInit} from '@angular/core';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.css', '../views/views.component.scss']
})
export class AdminUserInfoComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  @Input() email: string;

  constructor(private dialog: MatDialog) { }

  editUser(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '50%',
      panelClass: 'dialog-box',
      data: {name: this.name, role: this.role, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.name = result.name;
        this.role = result.role;
        this.email = result.email;
      }
    });
  }

  ngOnInit(): void {
  }

}
