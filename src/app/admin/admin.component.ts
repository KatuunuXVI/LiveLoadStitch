import {Component, OnInit, ViewChild} from '@angular/core';
import {UnitsService} from '../services/units/units.service';
import {SitesService} from '../services/sites/sites.service';
import {ActivatedRoute} from '@angular/router';
import {GoogleMap} from '@angular/google-maps';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../views/views.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('gmap') map: GoogleMap;

  currentSite = -1;

  icon = {
    url: '/assets/map-icon.png',
    scaledSize: {width: 80, height: 30},
    labelOrigin: {x: 40, y: 12}
  };

  markers = [];

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
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: 'satellite'
  };

  units = [];

  constructor(private route: ActivatedRoute, private uServ: UnitsService) { }

  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {
      if (!params.site) {
        this.currentSite = -1;
        this.uServ.getAllUnits().then(units => {
          this.units = units;
          this.addMarkers();
          this.setMapCenter();
        });
      } else {
        this.units = this.uServ.getSiteUnits(params.site);
        this.currentSite = params.site;
      }

      // this.addMarkers();
      // this.setMapCenter();
    });

  }

  setMapCenter(): void {
    console.log('Setting Map Center');

    const bounds = new google.maps.LatLngBounds();
    setTimeout(() => {
      for (const unit of this.units) {
        console.log('Unit: ' + JSON.stringify(unit));
        console.log('Latitude: ' + unit.latitude);
        bounds.extend(new google.maps.LatLng(unit.latitude, unit.longitude));
      }
      this.map.fitBounds(bounds);
    });
  }

  addMarkers(): void {
    this.markers = [];
    console.log(this.units.length);
    this.units.forEach((unit) => {
      this.markers.push({
        position: new google.maps.LatLng(unit.latitude, unit.longitude),
        label: {color: 'white', text: unit.unit_name},
        title: unit.unit_name,
        options: {icon: this.icon}
      });
    });
  }

}
