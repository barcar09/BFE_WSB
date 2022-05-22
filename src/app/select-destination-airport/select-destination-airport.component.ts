import { Component, OnInit } from '@angular/core';
import { SharedInformationService } from '../services/shared-information.service';


@Component({
  selector: 'app-select-destination-airport',
  templateUrl: './select-destination-airport.component.html',
  styleUrls: ['./select-destination-airport.component.css']
})

export class SelectDestinationAirportComponent implements OnInit {
  
  constructor(private sharedService:SharedInformationService) { }

  ngOnInit(): void {
  }

  selectDestinationAirport(place: string, cost: number, coordination: [string, string]) {
    this.sharedService.selectedDestinationAirport = place
    this.sharedService.selectedCost = cost
    this.sharedService.destinationCoordinates = coordination
  }
}
