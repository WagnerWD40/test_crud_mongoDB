import { PRODUCT_ACTIONS } from '../actions/product-action';

const initialState = {
    loading: false,
    products: [],
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case PRODUCT_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: true,
            }

        case PRODUCT_ACTIONS.GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false,
            }

        case PRODUCT_ACTIONS.CREATE_PRODUCT:
            return {
                ...state,
                products: [payload, ...state.products],
                loading: false,
            }

        case PRODUCT_ACTIONS.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product._id !== payload._id ? product : payload),
                loading: false,
            }

        case PRODUCT_ACTIONS.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== payload),
                loading: false,
            }

        default:
            return state;
        
    }
}