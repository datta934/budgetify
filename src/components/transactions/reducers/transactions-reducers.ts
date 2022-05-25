// import { compareTransactions, Course } from '../model/course';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { BudgetActions } from '../action-types';
import { InterfaceTransaction } from 'src/components/shared/transaction.interface';


export interface TransactionsState extends EntityState<InterfaceTransaction> {
    allTransactionsLoaded: boolean
}


export const adapter = createEntityAdapter<InterfaceTransaction>({

});


export const initialTransactionsState = adapter.getInitialState({
    allTransactionsLoaded: false
});


export const TransactionsReducer = createReducer(

    initialTransactionsState,

    on(BudgetActions.allTransactionsLoaded,
        (state, action) => adapter.addAll(
            action.interfaceTransactionRecords,
            {
                ...state,
                allTransactionsLoaded: true
            })),


    // on(BudgetActions.courseUpdated, (state, action) =>
    //     adapter.updateOne(action.update, state))

);


export const {
    selectAll
} = adapter.getSelectors();