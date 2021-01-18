import { spawn } from 'redux-saga/effects';
import productSaga from './product-saga';

export default function* rootSaga() {
    yield spawn(productSaga);
}