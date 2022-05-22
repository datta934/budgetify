import { createAction, props } from '@ngrx/store';
import { Account } from '../model/account.model';

export const getAccounts = createAction(
    '[Budget] get accounts',
    props<{ account: Account[] }>()
);

export const addBank = createAction(
    '[Budget] add bank',
    props<{ account: Account }>()
);

export const addEquity = createAction(
    '[Budget] add equity',
    props<{ account: Account}>()
);