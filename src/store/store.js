import {createStore} from 'redux';
import financialApp from '../reducers/reducers';

const store = createStore(financialApp);

store.subscribe(function() {
    console.log(store.getState());
});

export default store;