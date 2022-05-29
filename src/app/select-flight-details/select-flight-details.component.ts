import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { UserInformationPopupComponent } from '../user-information-popup/user-information-popup.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { SharedInformationService } from '../services/shared-information.service';

@Component({
  selector: 'app-select-flight-details',
  templateUrl: './select-flight-details.component.html',
  styleUrls: ['./select-flight-details.component.css']
})
export class SelectFlightDetailsComponent implements OnInit {
  
  personFormGroup: FormGroup;
  
  @Input() initialValue: number = 0;
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 8;
  @Input() symbol: string = "";
  @Input() ariaLabelLess: string = "";
  @Input() ariaLabelMore: string = "";
  seatSchemaLetters : string[] = ['A', 'B', 'C', 'D'];
  renderedValue: string = "";
  value: number = 0;
  totalCost:number = 0;
  seatSchemaNumbersCount : Number = 0
  constructor( private fb:FormBuilder, public dialog: MatDialog , private sharedService:SharedInformationService ) { }

  ngOnInit(): void {

    let personsArray = new FormArray([]);
    this.value = this.initialValue
    this.renderedValue = this.value.toString();
    
    this.seatSchemaLetters = ['A', 'B', 'C', 'D']
    this.personFormGroup =this.fb.group({
      'persons': personsArray
    })
    this.personFormGroup.valueChanges.subscribe( el=> console.log(el));
  }
  get personFormGroups(){
    return this.personFormGroup.get('persons') as FormArray
  }
  counter(i: Number) {
    if (this.sharedService.selectedDestinationAirport === "Gdansk") {
      this.seatSchemaNumbersCount = 24
    }
    else if (this.sharedService.selectedDestinationAirport === "Paris") {
      this.seatSchemaNumbersCount = 36
    } else {
      console.log(this.sharedService.selectedDestinationAirport)
      this.seatSchemaNumbersCount = 60
    }
    return new Array(i);
}
  toggleMore = () => {
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValue = this.value.toString();
      let personsArray = this.personFormGroup.get("persons") as FormArray;
      let newPerson = this.fb.group({
        "personBaggageType" : "",
        "personType": "",
        "seatNumber": 0,
        "seatLetter": ""
      })
  
      personsArray.push(newPerson)
    }
  };
  toggleLess = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValue = this.value.toString();
      let personsArray = this.personFormGroup.get("persons") as FormArray;
      personsArray.removeAt(personsArray.length-1)
    }
  };
  
  openInformationPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.height = "500px";
    const dialogRef = this.dialog.open(UserInformationPopupComponent,dialogConfig);

 }

 calculateTotalCost() {
  let personsArray = this.personFormGroup.get("persons") as FormArray;
  this.totalCost = 0
  for (const el of personsArray.value) {
        this.totalCost += (Number(el.personType) * this.sharedService.selectedCost) + Number(el.personBaggageType)
  }

 }
 savePersonsArray() {
  this.sharedService.personsArray = this.personFormGroup
  this.sharedService.selectedCost = this.totalCost
}

 
}
