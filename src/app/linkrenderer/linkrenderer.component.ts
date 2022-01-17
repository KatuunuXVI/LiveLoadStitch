import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-linkrenderer',
  templateUrl: './linkrenderer.component.html',
  styleUrls: ['./linkrenderer.component.css']
})
export class LinkrendererComponent implements ICellRendererAngularComp {
  public params: any;

  constructor() { }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
