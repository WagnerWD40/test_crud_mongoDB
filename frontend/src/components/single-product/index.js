import { connect, useDispatch } from 'react-redux';

import {
    Container,
    Cell,
    Actions,
    Action,
} from './styles/single-product';

import formatDate from '../../utils/formatDate';
import convertNumberToMoney from '../../utils/convertNumberToMoney';
import { PRODUCT_ACTIONS } from '../../redux/actions/product-action';
import { MODAL_ACTIONS } from '../../redux/actions/modal-actions';

function SingleProduct({ product, deleteProduct }) {
    const dispatch = useDispatch();
    
    const { _id, Nome, Descricao, Valor, Vencimento } = product;

    function handleEdit() {
        dispatch({ type: MODAL_ACTIONS.UPDATE_PRODUCT, payload: product });
    }

    function handleDelete() {
        if (window.confirm(`Você deseja excluir o produto ${Nome}`)) {
            deleteProduct(_id);
        }
    }

    return (
        <Container>
            <Cell>{Nome}</Cell>
            <Cell>{Descricao}</Cell>
            <Cell>{convertNumberToMoney(Valor)}</Cell>
            <Cell>{formatDate(Vencimento)}</Cell>
            <Actions>
                <Action onClick={handleEdit}>
                    <svg>
                        <use xlinkHref="icons/icons.svg#icon-pencil"></use>
                    </svg>
                </Action>
                <Action onClick={handleDelete}>
                    <svg>
                        <use xlinkHref="icons/icons.svg#icon-trash"></use>
                    </svg>
                </Action>
            </Actions>
        </Container>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        deleteProduct: (id) => dispatch({ type: PRODUCT_ACTIONS.DELETE_PRODUCT_REQUEST, payload: id }),
    }
}

export default connect(null, mapDispatchToProps)(SingleProduct);