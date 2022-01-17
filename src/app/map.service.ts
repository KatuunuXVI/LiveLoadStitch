import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  olat =  29.74955;
  olng = -95.3073;
  zoom = 12
  constructor() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
  }


  buildMap(lng, lat) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.olng, this.olat]
    })
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}