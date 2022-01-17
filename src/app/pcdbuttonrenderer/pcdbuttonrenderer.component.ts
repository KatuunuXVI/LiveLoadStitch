import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PcdimageService } from '../services/pcdimage/pcdimage.service';

import { Router } from '@angular/router';
import { LoadsService } from '../services/loads/loads.service';


@Component({
  selector: 'app-pcdbuttonrenderer',
  templateUrl: './pcdbuttonrenderer.component.html',
  styleUrls: ['./pcdbuttonrenderer.component.css']
})
export class PcdbuttonrendererComponent implements ICellRendererAngularComp {
  public params: any;
  private savedData: any;
  public btnStatus: boolean;
  private fileLocation: string;


  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private pServ: PcdimageService, private router: Router, private lserv: LoadsService) {
    console.log(this);
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {}

  agInit(params: ICellRendererParams): void { this.params = params; }

  refresh(params: any): boolean {
    return false;
  }

  async openDialog(): Promise<void> {
    const navigationDetails: string [] = ['/pcdData'];
    console.log('Router' + this.router.url);
    this.router.navigate(navigationDetails, {queryParams: {Name:this.fileLocation}});
  }

  ngOnInit(): void {
    this.savedData = Object.assign({}, this.params.data);
    // this.fileLocation = this.savedData.location;

    this.fileLocation = this.params.data.pcd_url;
    // console.log('Data: ' + JSON.stringify(this.params.data));
    this.btnStatus = this.fileLocation !== '0';
  }
}
