import {CHANGE_CURRENCY, ADD_TRANSACTION, REMOVE_TRANSACTION, GET_TRANSACTIONS} from '../reducers/actionTypes';

export const changeCurrencyAction = currency => ({
    type: CHANGE_CURRENCY,
    currency
});

export const addTransactionAction = transaction => ({
    type: ADD_TRANSACTION,
    transaction
});

export const getTransactionsAction = () => ({
    type: GET_TRANSACTIONS
});

export const removeTransactionAction = id => ({
    type: REMOVE_TRANSACTION,
    id
});  