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


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './../reducers/index';
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
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    // EntityDataModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [AppService, AccountService, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
