import { MODAL_ACTIONS } from '../actions/modal-actions';
import { MODAL_TYPES } from '../../constants/modal-types';

const initialState = {
    open: false,
    productData: null,
    modalType: null,
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case MODAL_ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                open: true,
                modalType: MODAL_TYPES.ADD,
                productData: null,
            }    
            
        case MODAL_ACTIONS.EDIT_PRODUCT:
            return {
                ...state,
                open: true,
                modalType: MODAL_TYPES.UPDATE,
                productData: payload,
            }

        case MODAL_ACTIONS.CLOSE:
            return {
                ...state,
                open: false,
                modalType: null,
                productData: null,
            }

        default:
            return state;
    }
}