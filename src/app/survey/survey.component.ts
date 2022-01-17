import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditSiteComponent} from '../edit-site/edit-site.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GoogleMap} from '@angular/google-maps';
import {SitesService} from '../services/sites/sites.service';
import {AggregateService} from '../services/aggregate/aggregate.service';
import {UnitsService} from '../services/units/units.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss', '../views/views.component.scss']
})




export class SurveyComponent implements OnInit {
  @ViewChild('gmap') map: GoogleMap;
  @Output() whenDelete = new EventEmitter();

  scaleMin = new Date().setDate(new Date().getDate() - 1);
  scaleMax = new Date();

  styles = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  options = {
    styles: this.styles,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    gestureHandling: 'none',
    mapTypeId: 'satellite'
  };

  @Input() sitename: string;
  @Input() siteId: number;
  @Input() markers: Array<object> = [];
  @Input() users: Array<object>;

  markerOptions = {
    icon: {
      url: '/assets/map-icon.png',
      scaledSize: {width: 80, height: 30},
      labelOrigin: {x: 40, y: 12}
    }
  };

  colorSchemeBlue = {
    domain: ['rgba(66,117,222,0.73)']
  };

  colorSchemeGreen = {
    domain: ['rgba(136,222,125,0.73)']
  };

  colorSchemeTeal = {
    domain: ['rgba(75,222,216,0.73)']
  };

  colorSchemePurple = {
    domain: ['rgba(128,106,222,0.73)']
  };

  loadsData = [
    {
      "name": "Loads",
      "series": []
    }
  ];

  costsData = [
    {
      "name": "Costs",
      "series": []
    }
  ];

  volumeData = [
    {
      "name": "Volume",
      "series": []
    }
  ];

  trucksData = [
    {
      "name": "Trucks",
      "series": []
    }
  ];

  currentChart = 'costs';

  resultMap = {
    costs: this.costsData,
    loads: this.loadsData,
    volume: this.volumeData,
    trucks: this.trucksData
  };

  colorMap = {
    costs: this.colorSchemeGreen,
    loads: this.colorSchemeTeal,
    volume: this.colorSchemeBlue,
    trucks: this.colorSchemePurple
  };

  labelMap = {
    costs: 'Total Cost of Loads (US$)',
    loads: 'Number of Loads',
    volume: 'Total Volume Loaded (yd³)',
    trucks: 'Number of Trucks Used'
  };

  openDialog(): void {
    return;
    const dialogRef = this.dialog.open(EditSiteComponent, {
      width: '60%',
      panelClass: 'dialog-box',
      data: {sitename: this.sitename, id: this.siteId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.delete) {
          this.whenDelete.emit(this.sitename);
        } else {
          const oldName = this.sitename;
          this.sitename = result.sitename;
          this.sServ.updateSiteName(this.siteId, result.sitename);

          const snackBarRef = this.snackBar.open('Edited Site: ' + result.sitename, 'Undo');

          snackBarRef.onAction().subscribe(() => {
            this.sitename = oldName;
            this.sServ.updateSiteName(this.siteId, oldName);
          });
        }
      }
    });
  }

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private sServ: SitesService,
              private aServ: AggregateService, private uServ: UnitsService) { }

  ngOnInit(): void {

    this.getMarkers(this.siteId).then(markers => {
      this.markers = markers;
      this.setMapCenter();
    });
    const start = new Date();
    start.setDate(start.getDate() - 1);
    const end = new Date();

    this.aServ.getAggregateData(start, end, 'hour', 'loads', this.sitename).then(data => {
      this.loadsData[0].series = data;
    });
    this.aServ.getAggregateData(start, end, 'hour', 'costs', this.sitename).then(data => {
      this.costsData = [
        {
          "name": "Costs",
          "series": data
        }
      ];
      this.resultMap.costs = this.costsData;
    });
    this.aServ.getAggregateData(start, end, 'hour', 'volume', this.sitename).then(data => {
      this.volumeData[0].series = data;
    });
    this.aServ.getAggregateData(start, end, 'hour', 'trucks', this.sitename).then(data => {
      this.trucksData[0].series = data;
    });

    console.log('Admin Loaded');

    // this.loadsData[0].series = this.aServ.getAggregateData(start, end, 'hour', 'productivity', this.sitename);
    // this.costsData[0].series = this.aServ.getAggregateData(start, end, 'hour', 'safety', this.sitename);
    // this.volumeData[0].series = this.aServ.getAggregateData(start, end, 'hour', 'volume', this.sitename);
    // this.trucksData[0].series = this.aServ.getAggregateData(start, end, 'hour', 'survey', this.sitename);


  }

  setMapCenter(): void {
    const bounds = new google.maps.LatLngBounds();
    setTimeout(() => {

      for (const marker of this.markers) {
        // @ts-ignore
        bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
      }
      // console.log('Map: ' + JSON.stringify(this.map));

      this.map.fitBounds(bounds);

    });
  }

  getMarkers(siteId): any {
    return this.uServ.getSiteUnits(siteId).then(units => {
      const marks = [];
      for (const unit of units) {
        marks.push({
          position: {lat: parseFloat(unit.latitude), lng: parseFloat(unit.longitude)},
          label: {color: 'white', text: unit.unit_name},
          title: unit.unit_name
        });
      }
      return marks;
    });
  }
}
