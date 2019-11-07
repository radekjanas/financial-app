import {CHANGE_CURRENCY, ADD_TRANSACTION, REMOVE_TRANSACTION, GET_TRANSACTIONS} from './actionTypes';
import initialState from '../store/initialState';

// Main reducer
const financialApp = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENCY:
            return Object.assign({}, state, {
                currency: action.currency
            });
        case ADD_TRANSACTION:
            return Object.assign({}, state, {
                transactions: state.transactions.concat(action.transaction)
            });
        case REMOVE_TRANSACTION:
            return Object.assign({}, state, {
                transactions: state.transactions.filter(function(el) {
                    return el.id !== action.id;
                })
            });
        case GET_TRANSACTIONS:
            return state.transactions;
        default:
            return state;
    }
}

export default financialApp;