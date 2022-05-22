import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationService {

  selectedDepartureAirport: string;
  selectedDestinationAirport: string;
  selectedCost: number;
  destinationCoordinates: [string, string]
  constructor() { }
}
