import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BudgetActions } from './../action-types';
import { concatMap, map } from 'rxjs/operators';
import { allTransactionsLoaded } from './../actions/app.actions';
import { TransactionService } from 'src/components/transactions/transaction.service';


@Injectable()
export class BudgetEffects {

    loadTransactions$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(BudgetActions.loadAllTransactions),
                concatMap(action =>
                    this.transactionService.getTransactions()),
                map(transactions => allTransactionsLoaded({ transactions }))

            )
    );

    constructor(private actions$: Actions,
        private transactionService: TransactionService) {

    }

}