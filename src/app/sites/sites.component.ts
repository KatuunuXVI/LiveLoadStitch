import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {SitesService} from '../services/sites/sites.service';
import {LoadsService} from '../services/loads/loads.service';
import {ActivatedRoute} from '@angular/router';
import {AggregateService} from '../services/aggregate/aggregate.service';
import {SitefeedService} from '../services/sitefeed/sitefeed.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css', '../views/views.component.scss']
})
export class SitesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [

    {headerName: 'Date / Time', field: 'time_loaded', sortable: true, filter: true, minWidth: 50, sort: 'desc', /** Date */
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

  updateData = [];
  rowData = [];

  colorScheme = {
    domain: ['rgba(136,222,125,0.73)']
  };

  multi = [
    {
      "name": "# of Loads",
      "series": []
    }
  ];

  currentSite = -1;

  constructor(private route: ActivatedRoute, private lServ: LoadsService, private aServ: AggregateService, private sfServ: SitefeedService) {
    window.onresize = () => {
      this.agGrid.api.sizeColumnsToFit();
    };
  }

  onFirstDataRendered(params): void {
    params.api.sizeColumnsToFit();
  }

  getNewData(sitename): void {
    const start = new Date();
    start.setDate(start.getDate() - 1);
    this.updateData = this.sfServ.getSiteFeed(sitename);
    this.aServ.getAggregateData(start, new Date(), 'hour', 'loads', sitename).then(data => {
      this.multi = [
        {
          "name": "# of Loads",
          "series": data
        }
      ];
    });
    // const loadsData = this.aServ.getAggregateData(start, new Date(), 'hour', 'productivity', sitename);
    // this.multi = [
    //   {
    //     "name": "# of Loads",
    //     "series": loadsData
    //   }
    // ];
    if (sitename == null) {
      this.lServ.getLoadsRange(start, new Date()).then(data => {
        this.rowData = data;
      });
      // this.rowData = this.lServ.getLoadsRange(start, new Date());
    } else {
      this.lServ.getLoadsRangeBySite(start, new Date(), sitename).then(data => {
        this.rowData = data;
      });
      // this.rowData = this.lServ.getLoadsRangeBySite(start, new Date(), sitename);
    }
  }

  ngOnInit(): void {
    // TODO: update data here using IDs instead (requires database)
    this.route.queryParams.subscribe(params => {
      const start = new Date();
      start.setDate(start.getDate() - 1);
      if (!params.site) {
        this.currentSite = -1;
      } else {
        this.currentSite = params.site;
      }
    });
  }

}
