import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-unit-update',
  templateUrl: './unit-update.component.html',
  styleUrls: ['./unit-update.component.scss', '../views/views.component.scss']
})
export class UnitUpdateComponent implements OnInit {
  @ViewChild('gmap') map: GoogleMap;

  @Input() type: string;
  @Input() unitName: string;
  @Input() datePosted: Date;
  @Input() numLoads: number;
  @Input() batteryData: any;
  @Input() moveData: any;

  center: google.maps.LatLngLiteral;
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
    zoomControl: false,
    gestureHandling: 'none'
  };

  icon = {
    url: '/assets/map-icon.png',
    scaledSize: {width: 100, height: 30},
    labelOrigin: {x: 50, y: 12}
  };

  markers = [];

  constructor() { }

  dateToUpdateString(date): string {
    const seconds = Math.floor((new Date().getTime() - date) / 1000);
    let toReturn;
    let interval = seconds / 31536000;

    if (interval > 1) {
      toReturn = Math.floor(interval) + " year";
      if (Math.floor(interval) > 1) {
        toReturn += 's';
      }
      return toReturn;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      toReturn = Math.floor(interval) + " month";
      if (Math.floor(interval) > 1) {
        toReturn += 's';
      }
      return toReturn;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      toReturn = Math.floor(interval) + " day";
      if (Math.floor(interval) > 1) {
        toReturn += 's';
      }
      return toReturn;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      toReturn = Math.floor(interval) + " hour";
      if (Math.floor(interval) > 1) {
        toReturn += 's';
      }
      return toReturn;
    }
    interval = seconds / 60;
    if (interval > 1) {
      toReturn = Math.floor(interval) + " minute";
      if (Math.floor(interval) > 1) {
        toReturn += 's';
      }
      return toReturn;
    }
    toReturn = Math.floor(seconds) + " second";
    if (Math.floor(seconds) !== 1) {
      toReturn += 's';
    }
    return toReturn;
  }

  setMapCenter(): void {
    const bounds = new google.maps.LatLngBounds();
    setTimeout(() => {
      for (const marker of this.markers) {
        bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
      }
      this.map.fitBounds(bounds);
    });
  }

  ngOnInit(): void {
    if (this.type === 'move') {
      this.markers = [
        {
          position: this.moveData[0],
          label: {color: 'white', text: 'Old Location'},
          title: 'Old Location',
          options: {icon: this.icon}
        },
        {
          position: this.moveData[1],
          label: {color: 'white', text: 'New Location'},
          title: 'New Location',
          options: {icon: this.icon}
        }
      ];
      this.setMapCenter();
    }
  }

}
