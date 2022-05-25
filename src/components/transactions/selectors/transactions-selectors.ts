import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionsState } from '../reducers/transactions-reducers';

import * as fromTransactions from '../reducers/transactions-reducers';


export const selectTransactionsState =
    createFeatureSelector<TransactionsState>("transactions");



export const selectAllTransactions = createSelector(
    selectTransactionsState,
    fromTransactions.selectAll
);