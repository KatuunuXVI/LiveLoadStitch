import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityComponent } from '../productivity/productivity.component';
import { ViewsComponent } from './views.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AgGridModule} from 'ag-grid-angular';
import { AdminComponent } from '../admin/admin.component';
import { SitesComponent } from '../sites/sites.component';
import { UnitsComponent } from '../units/units.component';
import { SurveyComponent } from '../survey/survey.component';
import { TitleboxComponent } from '../titlebox/titlebox.component';
import {AppRoutingModule} from '../app-routing.module';
import { LinkrendererComponent } from '../linkrenderer/linkrenderer.component';
import {MatCardModule} from '@angular/material/card';
import { UnitInfoBoxComponent } from '../unit-info-box/unit-info-box.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {GoogleMapsModule} from '@angular/google-maps';
import { AdminSiteOverviewComponent } from '../admin-site-overview/admin-site-overview.component';
import { SafetySiteOverviewComponent } from '../safety-site-overview/safety-site-overview.component';
import { AdminUserInfoComponent } from '../admin-user-info/admin-user-info.component';
import { UnitUpdateComponent } from '../unit-update/unit-update.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EditbuttonrendererComponent } from '../editbuttonrenderer/editbuttonrenderer.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { SafetyComponent } from '../safety/safety.component';
import { ClientBoxComponent } from '../client-box/client-box.component';
import { EditSiteComponent } from '../edit-site/edit-site.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { EditUnitComponent } from '../edit-unit/edit-unit.component';
import { EditTruckComponent } from '../edit-truck/edit-truck.component';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { AddTruckComponent } from '../add-truck/add-truck.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { SiteUnitBoxComponent } from '../site-unit-box/site-unit-box.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import {MatFileUploadModule} from 'mat-file-upload';
import { AddSiteComponent } from '../add-site/add-site.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MapComponent} from "../map/map.component";


@NgModule({
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      duration: 5000,
      horizontalPosition: 'center',
      panelClass: 'snack-bar'
    }}
  ],
  declarations: [
    ProductivityComponent,
    ViewsComponent,
    AdminComponent,
    SitesComponent,
    UnitsComponent,
    SurveyComponent,
    TitleboxComponent,
    LinkrendererComponent,
    UnitInfoBoxComponent,
    AdminSiteOverviewComponent,
    SafetySiteOverviewComponent,
    AdminUserInfoComponent,
    UnitUpdateComponent,
    EditbuttonrendererComponent,
    SafetyComponent,
    ClientBoxComponent,
    EditSiteComponent,
    EditUnitComponent,
    EditTruckComponent,
    EditClientComponent,
    AddTruckComponent,
    AddClientComponent,
    SiteUnitBoxComponent,
    EditUserComponent,
    MessageDialogComponent,
    NotificationDialogComponent,
    UserSettingsComponent,
    AddSiteComponent,
    MapComponent,
  ],
  exports: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule,
    MatCardModule,
    MatSidenavModule,
    GoogleMapsModule,
    NgxChartsModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFileUploadModule,
    MatSnackBarModule
  ]
})
export class ViewsModule { }
