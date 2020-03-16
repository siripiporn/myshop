import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import productReducer from './ProductReducers';
import OrderReducers from './OrderReducers';

const rootReducer = combineReducers ({
    orders : OrderReducers,
    products : productReducer,
    form : reduxForm
})

export default rootReducer;