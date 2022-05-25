import {createAction, props} from '@ngrx/store';
import { InterfaceTransactionRecords } from 'src/components/shared/transaction.interface';
// import {Course} from './model/course';
// import {Update} from '@ngrx/entity';
// import {UpdateStr} from '@ngrx/entity/src/models';


export const loadAllTransactions = createAction(
    "[Transactions] Load All Transactions"
);


export const allTransactionsLoaded = createAction(
    "[Transactions Effect] All Transactions Loaded",
    props<{interfaceTransactionRecords: InterfaceTransactionRecords[]}>()
);