import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonFormData } from 'src/components/shared/json-form/json-form.component';
import { TransactionService } from './../transaction.service';
import { accountTypes } from 'src/assets/accountType';
import { categoryTypes, transactionTypes } from 'src/assets/transactionType'
import { AccountService } from 'src/components/accounts/account.service';
import { InterfaceTransaction } from 'src/components/shared/transaction.interface';

@Component({
  selector: 'add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  accountTypes = accountTypes;
  categoryTypes = categoryTypes;
  transactionTypes = transactionTypes;
  accounts: any = [];
  accountsData: any = [];
  txnType = "BankTxn";
  category = "CREDIT";
  accountSelected: any;
  formData: JsonFormData;
  requestData: InterfaceTransaction = {
    "date": "",
    "amount": 0,
    "category": "",
    "txnType": "",
    "notes": "",
    "account": {
      "id": 0,
      "accountType": ""
    },
    "script": "",
    "units": "",
    "unitPrice": 0,
  };
  constructor(public matDialog: MatDialog, private http: HttpClient, private accountService: AccountService,
    private transactionService: TransactionService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.onTypeChange("BankTxn");
  }

  onTypeChange(value) {
    this.accountService.getAccounts().subscribe((data) => {
      this.accountsData = data;
    });
    switch (value) {
      case "BankTxn": this.http
        .get('/assets/transactions-json/bankTransaction.json')
        .subscribe((formData: JsonFormData) => {
          this.formData = formData;
          this.accounts = this.accountsData.filter(function (account) {
            return account.accountType == value.replace("Txn", "").toUpperCase()
          });
        });
        break;
      case "EquityTxn":
        this.formData = { controls: [] }
        this.http
          .get('/assets/transactions-json/equityTransaction.json')
          .subscribe((formData: JsonFormData) => {
            this.formData = formData;
            this.accounts = this.accountsData.filter(function (account) {
              return account.accountType == value.replace("Txn", "").toUpperCase()
            });
          });
        break;
      default: alert("Please select a type!")
    }
  }
  submitData(formData) {
    let selectedAccount = this.accounts.find(a => a.id == this.accountSelected);

    //Required Fields
    this.requestData["date"] = formData.date;
    this.requestData["amount"] = formData.amount;
    this.requestData["notes"] = formData.notes;
    this.requestData["category"] = this.category.toUpperCase();
    this.requestData["txnType"] = this.txnType;
    this.requestData["unitPrice"] = formData.unitPrice;
    this.requestData["units"] = formData.units;
    this.requestData["script"] = formData.script;
    this.requestData["account"]["id"] = this.accountSelected;
    this.requestData["account"]["accountType"] = selectedAccount.accountType;

    //Optional Fields
    console.log(this.requestData)
    this.transactionService.addTransaction(this.requestData)
      .subscribe((data) => {
        console.log("Data saved!")
        this.openSnackBar("Transaction saved successfully");
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
