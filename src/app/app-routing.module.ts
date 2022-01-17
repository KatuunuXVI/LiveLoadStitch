import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductivityComponent } from './productivity/productivity.component';
import {AdminComponent} from './admin/admin.component';
import {SitesComponent} from './sites/sites.component';
import {UnitsComponent} from './units/units.component';
import {SurveyComponent} from './survey/survey.component';
import {LoginComponent} from './login/login.component';
import {MainViewComponent} from './main-view/main-view.component';
import {SafetyComponent} from './safety/safety.component';
import {AuthGuardService} from './auth-guard.service';
import {SignupComponent} from './signup/signup.component';
import {VerificationComponent} from './verification/verification.component';
import { PcddisplayComponent } from './pcddisplay/pcddisplay.component';

const routes: Routes = [
  { path: 'main', component: MainViewComponent, canActivate: [AuthGuardService],
  children: [
    { path: '', component: AdminComponent },
    { path: 'sites', component: SitesComponent },
    { path: 'units', component: UnitsComponent },
    { path: 'survey', component: SurveyComponent },
    { path: 'productivity', component: ProductivityComponent },
    { path: 'safety', component: SafetyComponent }
  ]},
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: VerificationComponent },
  { path: 'pcdData', component: PcddisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
