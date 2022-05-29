import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SharedInformationService {

  selectedDepartureAirport: string;
  selectedDestinationAirport: string;
  selectedCost: number;
  destinationCoordinates: [string, string]
  personsArray: FormGroup
  constructor() { }
}
