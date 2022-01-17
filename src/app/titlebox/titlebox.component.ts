import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EditTruckComponent} from '../edit-truck/edit-truck.component';
import {MatDialog} from '@angular/material/dialog';
import {AddClientComponent} from '../add-client/add-client.component';
import {SitesService} from '../services/sites/sites.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-titlebox',
  templateUrl: './titlebox.component.html',
  styleUrls: ['./titlebox.component.scss']
})

export class TitleboxComponent implements OnInit {
  @Input() titleText: string;
  @Input() download: boolean;
  @Input() addText: string;
  @Input() showSiteDropdown: any;
  @Input() addComponent: any;

  @Input() showSiteName: boolean;

  @Output() whenDownload = new EventEmitter();
  @Output() whenAdd = new EventEmitter();

  selectedSitename = '';
  @Output() onSitenameChange = new EventEmitter<string>();

  sites = [];

  addClick(): void {
    console.log(this.addComponent);
    const dialogRef = this.dialog.open(this.addComponent, {
      width: '50%',
      panelClass: 'dialog-box'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.whenAdd.emit(result);
      }
    });
  }

  downloadClick(): void {
    this.whenDownload.emit();
  }

  reloadData(): void {
    location.reload();
  }

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private sServ: SitesService) { }

  ngOnInit(): void {
    this.sServ.getSites().then(sites => {
      this.sites = sites;

      if (this.showSiteName) {
        this.route.queryParams.subscribe(params => {
          this.selectedSitename = 'All Sites';
          for (const site of this.sites) {
            if (site.site_id.toString() === params.site) {
              this.selectedSitename = site.site_name;
              this.onSitenameChange.emit(site.site_name);
              return;
            }
          }
          this.onSitenameChange.emit(null);
        });
      }
    });


  }

}
