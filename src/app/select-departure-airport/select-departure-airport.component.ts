import { Component, OnInit } from '@angular/core';
import { SharedInformationService } from '../services/shared-information.service';

@Component({
  selector: 'app-select-departure-airport',
  templateUrl: './select-departure-airport.component.html',
  styleUrls: ['./select-departure-airport.component.css']
})
export class SelectDepartureAirportComponent implements OnInit {
  constructor( private sharedService:SharedInformationService) { }

  ngOnInit(): void {
  }

  selectDepartureAirport(airport: string) {
      this.sharedService.selectedDepartureAirport = airport
  }

}
