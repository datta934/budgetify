import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonFormData } from 'src/components/shared/json-form/json-form.component';
import { AccountService } from '../account.service';
import { accountTypes } from 'src/assets/accountType';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  accountTypes = accountTypes;
  accountType = "Bank";
  formData: JsonFormData;
  constructor(public matDialog: MatDialog, private http: HttpClient, private accountService: AccountService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.onTypeChange("Bank");
  }

  onTypeChange(value) {
    switch (value) {
      case "Bank": this.http
        .get('/assets/accounts-json/bankAccount.json')
        .subscribe((formData: JsonFormData) => {
          this.formData = formData;
        });
        break;
      case "Equity": this.http
        .get('/assets/accounts-json/equityAccount.json')
        .subscribe((formData: JsonFormData) => {
          this.formData = formData;
        });
        break;
      default: alert("Please select a type!")
    }
  }
  submitData(formData) {
    console.log("Form Values");
    formData["accountType"] = this.accountType.toUpperCase();
    console.log(formData)
    this.accountService.addAccount(formData)
      .subscribe((data) => {
        this.openSnackBar("Bank account saved successfully");
      }, err => {
        this.openSnackBar("Error Occurred!");
      });

  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
    });
  }
}
