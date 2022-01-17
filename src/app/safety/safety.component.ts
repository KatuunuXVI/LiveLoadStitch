import { Component, OnInit } from '@angular/core';
import {AddSiteComponent} from '../add-site/add-site.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SitesService} from '../services/sites/sites.service';
import {UnitsService} from '../services/units/units.service';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css', '../views/views.component.scss']
})
export class SafetyComponent implements OnInit {

  markers = [
    {
      position: {lat: 29.7161402, lng: -95.4166219},
      label: {color: 'white', text: 'Unit One'},
      title: 'Unit One'
    },
    {
      position: {lat: 29.728811, lng: -95.432586},
      label: {color: 'white', text: 'Unit Two'},
      title: 'Unit Two'
    },
    {
      position: {lat: 29.741332, lng: -95.403919},
      label: {color: 'white', text: 'Unit Three'},
      title: 'Unit Three'
    }
  ];

  users = [
    {name: 'User A', role: 'Admin'},
    {name: 'User B', role: 'Site Admin'},
    {name: 'User C', role: 'Site Admin'},
    {name: 'User D', role: 'Site Admin'},
    {name: 'User E', role: 'Site Operator'},
    {name: 'User F', role: 'Site Operator'},
    {name: 'User G', role: 'Site Operator'},
  ];

  sites = [];

  addComponent = AddSiteComponent;

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

  addSite(site): void {

    const snackBarRef = this.snackBar.open('Added Site: ' + site.sitename, 'Undo');
    this.sites.push({
      name: site.sitename,
      units: this.markers,
      users: this.users
    });

    snackBarRef.onAction().subscribe(() => {
      this.sites.pop();
    });
  }

  deleteSite(sitename): void {
    let removedSite;
    for (let i = 0; i < this.sites.length; i++) {
      if (this.sites[i].name === sitename) {
        removedSite = this.sites[i];
        this.sites.splice(i, 1);
      }
    }

    const snackBarRef = this.snackBar.open('Removed Site: ' + sitename, 'Undo');
    snackBarRef.onAction().subscribe(() => {
      this.sites.push(removedSite);
    });
  }

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private sServ: SitesService) { }

  ngOnInit(): void {
    this.sServ.getSites().then(sites => {
      this.sites = sites;
      for (const site of this.sites) {
        site.users = this.users;
      }
    });
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

  onFirstDataRendered(params): void {
    params.api.sizeColumnsToFit();
  }


}
