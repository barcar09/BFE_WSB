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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
