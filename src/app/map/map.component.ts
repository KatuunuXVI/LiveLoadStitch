import { Component, OnInit } from '@angular/core';
import { MapService } from "../map.service";
let lat = 0;
let lng = 0;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit {
  constructor(private map: MapService) { }
  ngOnInit() {

    this.map.buildMap(lat, lng);
  }
}