import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    Header,
} from './styles/product-list';

import SingleProduct from '../single-product';

import { PRODUCT_ACTIONS } from '../../redux/actions/product-action';

function ProductList({ productState: { loading, products }, getProducts }) {

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <Container>
            <thead>
                <Header>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data de Validade</th>
                </Header>
            </thead>
            <tbody>
                {products && products.map(product => (
                    <SingleProduct key={product._id} product={product} />
                ))}
            </tbody>
            
        </Container>
    );
}

function mapStateToProps(state) {
    return { productState: state.productState };
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch({ type: PRODUCT_ACTIONS.GET_PRODUCTS_REQUEST }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);