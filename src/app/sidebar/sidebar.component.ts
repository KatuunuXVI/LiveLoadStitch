import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, RouterState, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public selection = '/';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selection = event.url.split('?')[0];
      }
    });
  }

  ngOnInit(): void {
  }

}
