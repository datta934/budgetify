import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { AddAccountComponent } from 'src/components/accounts/add-account/add-account.component';
import { OpenDialogModalComponent } from 'src/components/shared/open-dialog-modal/open-dialog-modal.component';
import { AccountService } from 'src/components/accounts/account.service';
import { JsonFormComponent } from 'src/components/shared/json-form/json-form.component';
import { GetAccountsComponent } from 'src/components/accounts/get-accounts/get-accounts.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AddTransactionComponent } from 'src/components/transactions/add-transaction/add-transaction.component';
import { GetTransactionsComponent } from 'src/components/transactions/get-transactions/get-transactions.component';
@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    OpenDialogModalComponent,
    JsonFormComponent,
    GetAccountsComponent,
    AddTransactionComponent,
    GetTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [AppService, AccountService, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
