import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-user-information-popup',
  templateUrl: './user-information-popup.component.html',
  styleUrls: ['./user-information-popup.component.css']
})
export class UserInformationPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

}
