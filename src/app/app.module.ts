import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SelectFlightComponent } from './components/select-flight/select-flight.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { SelectDepartureAirportComponent } from './select-departure-airport/select-departure-airport.component';
import { SelectDestinationAirportComponent } from './select-destination-airport/select-destination-airport.component';
import { SelectFlightDetailsComponent } from './select-flight-details/select-flight-details.component';
import { UserInformationPopupComponent } from './user-information-popup/user-information-popup.component';
import { SharedInformationService } from './services/shared-information.service';
import { SummaryComponent } from './summary/summary.component';

const appRoutes:Routes = [
  {path:"", component: SelectFlightComponent, canActivate:[AuthGuardService]},
  {path:"login", component: LoginWindowComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginWindowComponent,
    SelectFlightComponent,
    SelectDepartureAirportComponent,
    SelectDestinationAirportComponent,
    SelectFlightDetailsComponent,
    UserInformationPopupComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService, AuthGuardService, SharedInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
