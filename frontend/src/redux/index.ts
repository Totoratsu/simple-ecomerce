import { createStore, combineReducers } from 'redux';

import CartReducer from './cart/reducers';
import ProductReducer from './products/reducers';

const reducers = combineReducers({
    ProductReducer,
    CartReducer
});

const store = createStore(
    reducers/* ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
);

export default store;