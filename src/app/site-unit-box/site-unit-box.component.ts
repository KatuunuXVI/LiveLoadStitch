import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-site-unit-box',
  templateUrl: './site-unit-box.component.html',
  styleUrls: ['./site-unit-box.component.css', '../views/views.component.scss']
})
export class SiteUnitBoxComponent implements OnInit {

  @Input() name: string;
  @Input() address: string;
  @Input() buttonIcon: string;

  @Output() whenClick = new EventEmitter();

  emitEvent(): void {
    this.whenClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
