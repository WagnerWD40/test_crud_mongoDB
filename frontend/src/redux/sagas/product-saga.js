import {
    put,
    call,
    takeLatest,
    takeEvery
} from 'redux-saga/effects';

import { PRODUCT_ACTIONS } from '../actions/product-action';
import { MODAL_ACTIONS } from '../actions/modal-actions';

import {
    getAllProducts,
    createNewProduct,
    updateExistingProduct,
    deleteExistingProduct,
} from '../../services/api';

function* getProducts() {
    yield put({ type: PRODUCT_ACTIONS.SET_LOADING });

    const products = yield call(getAllProducts);

    yield put({ type: PRODUCT_ACTIONS.GET_PRODUCTS, payload: products });

}

function* createProduct({ payload }) {
    yield put({ type: PRODUCT_ACTIONS.SET_LOADING });
    const newProduct = yield call(createNewProduct, payload);

    yield put({ type: PRODUCT_ACTIONS.CREATE_PRODUCT, payload: newProduct });
    yield put({ type: MODAL_ACTIONS.CLOSE });
}

function* updateProduct({ payload }) {
    yield put({ type: PRODUCT_ACTIONS.SET_LOADING });
    const updatedProduct = yield call(updateExistingProduct, payload);

    yield put({ type: PRODUCT_ACTIONS.UPDATE_PRODUCT, payload: updatedProduct });
    yield put({ type: MODAL_ACTIONS.CLOSE });
}

function* deleteProduct({ payload }) {
    yield put({ type: PRODUCT_ACTIONS.SET_LOADING });
    yield call(deleteExistingProduct, payload);

    yield put({ type: PRODUCT_ACTIONS.DELETE_PRODUCT, payload })
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_ACTIONS.GET_PRODUCTS_REQUEST, getProducts);
    yield takeLatest(PRODUCT_ACTIONS.CREATE_PRODUCT_REQUEST, createProduct);
    yield takeLatest(PRODUCT_ACTIONS.UPDATE_PRODUCT_REQUEST, updateProduct);
    yield takeEvery(PRODUCT_ACTIONS.DELETE_PRODUCT_REQUEST, deleteProduct);
}