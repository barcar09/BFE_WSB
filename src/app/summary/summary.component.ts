import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, Form } from '@angular/forms';
import { SharedInformationService } from '../services/shared-information.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  selectedDepartureAirport: string = ''
  selectedDestinationAirport: string = ''
  selectedCost: number = 0
  numberOfPersons: number = 0
  destinationCoordinates: [string, string] = ['','']
  personsArray: FormGroup 
  isLoaded:boolean=false;
  constructor( private sharedService:SharedInformationService) { }

  ngOnInit(): void {
    this.selectedDepartureAirport = this.sharedService.selectedDepartureAirport
    this.selectedDestinationAirport = this.sharedService.selectedDestinationAirport
    this.selectedCost = this.sharedService.selectedCost
    this.personsArray = this.sharedService.personsArray
    

  }
  showSummary() {
    this.selectedDepartureAirport = this.sharedService.selectedDepartureAirport
    this.selectedDestinationAirport = this.sharedService.selectedDestinationAirport
    this.selectedCost = this.sharedService.selectedCost
    this.personsArray = this.sharedService.personsArray
    let getPersonsArray = this.personsArray?.get('persons') as FormArray
    this.numberOfPersons = getPersonsArray?.length
    console.log(this.selectedCost)
    console.log(this.sharedService.personsArray)
    console.log(this.selectedDepartureAirport)
    console.log(this.selectedDestinationAirport)
    console.log(  getPersonsArray?.value)
  }
}
