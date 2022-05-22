import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAccountComponent } from 'src/components/accounts/add-account/add-account.component';
import { AddTransactionComponent } from 'src/components/transactions/add-transaction/add-transaction.component';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'budgetapp';
 
  constructor(private dialog: MatDialog, private appService: AppService) {

  }

  ngOnInit() {
  }
  addEnvelopeDialog() {

  }
  addAccountDialog() {
    let dialogRef = this.dialog.open(AddAccountComponent, {
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      console.log(res.data)
    })
  }

  openTransactionDialog() {
    let dialogRef = this.dialog.open(AddTransactionComponent, {
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      console.log(res.data)
    })
  }


}
