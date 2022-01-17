import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {ViewsModule} from './views/views.module';
import { LoginComponent } from './login/login.component';
import { MainViewComponent } from './main-view/main-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {AuthGuardService} from './auth-guard.service';
import {JwtHelperService, JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { ConfirmWindowComponent } from './confirm-window/confirm-window.component';
import {MatDialogModule} from '@angular/material/dialog';
// import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { PcdbuttonrendererComponent } from './pcdbuttonrenderer/pcdbuttonrenderer.component';
import { PcddisplayComponent } from './pcddisplay/pcddisplay.component';
import { SafetyComponent } from './safety/safety.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatCardModule} from "@angular/material/card";
import {GoogleMapsModule} from "@angular/google-maps";





@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        LoginComponent,
        MainViewComponent,
        SignupComponent,
        VerificationComponent,
        ConfirmWindowComponent,
        PcdbuttonrendererComponent,
        PcddisplayComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        ViewsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatMenuModule,
        HttpClientModule,
        MatDialogModule,
        NgxChartsModule,
        MatCardModule,
        GoogleMapsModule
    ],
    providers: [JwtHelperService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}],
    exports: [

    ],

    bootstrap: [AppComponent]
})

export class AppModule {

}
