import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {LoadsService} from '../services/loads/loads.service';
import { PcdbuttonrendererComponent } from '../pcdbuttonrenderer/pcdbuttonrenderer.component';


@Component({
  selector: 'app-loads',
  templateUrl: './productivity.component.html',
  styleUrls: ['./loads.component.scss', '../views/views.component.scss']
})
export class ProductivityComponent implements OnInit {

  constructor(private route: ActivatedRoute, private lServ: LoadsService) {
    window.onresize = () => {
      this.agGrid.api.sizeColumnsToFit();
    };
  }
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [

    {headerName: 'Date / Time', field: 'time_loaded', sortable: true, filter: true, minWidth: 185, sort: 'desc', /** Date */
      cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleString() : '';
      }},

    {headerName: 'Type', field: 'type', sortable: true, filter: true, minWidth: 95}, /** Truck Plate */
    {headerName: 'Site', field: 'site', sortable: true, filter: true, minWidth: 95}, /** Site */
    {headerName: 'Quantity', headerTooltip: 'Unit', field: 'quantity', sortable: true, filter: true, minWidth: 70}, /** Unit */
    {headerName: 'Units of Measurement', field: 'uom', sortable: false, filter: true, minWidth: 95}, /** Site */

    {headerName: 'Video', field: 'vidEvent', floatingFilter: false, width: 70, minWidth: 80//,
      //cellRendererFramework: VideoeventbuttonrdrComponent
    }
  ];

  defaultColDef = {
    filter: true,
    floatingFilter: true,
    enableCellChangeFlash: true,
    animateRows: true,
    context:{
      theFactor:1
    },
  };

  rowData = [];

  setFactor = (params) => {
    console.log(params)
  }

  onFirstDataRendered(params): void {
    params.api.sizeColumnsToFit();
  }

  downloadData(): void {
    this.agGrid.api.exportDataAsCsv();
  }

  onGridReady(gridParams): void {
    let truckID;
    this.route.queryParams.subscribe(params => {
      truckID = params.truck;
    });

    if (truckID) {
      const truckFilter = gridParams.api.getFilterInstance('license_plate');
      truckFilter.setModel({
        type: 'equals',
        filter: truckID
      });
      gridParams.api.onFilterChanged();
    }
  }

  onBtnClick(params){
    console.log(params);
  }

  ngOnInit(): void {
    // this.rowData = this.lServ.getLoads();
    this.lServ.getLoads().then(loads => {
      // console.log('Loads: ' + JSON.stringify(productivity.reverse()));

      //this.rowData = productivity;
    });
  }

}
