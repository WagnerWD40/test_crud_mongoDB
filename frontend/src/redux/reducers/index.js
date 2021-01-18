import { combineReducers } from 'redux';

import productState from './product-reducer';
import modalState from './modal-reducer';

export default combineReducers({
    productState,
    modalState,
});