import { useDispatch } from 'react-redux';

import {
    Container,
    Title,
    Actions,
    Action,
} from './styles/navbar';

import { MODAL_ACTIONS } from '../../redux/actions/modal-actions';

function Navbar({ setFormOpen }) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch({ type: MODAL_ACTIONS.ADD_PRODUCT });
    }

    return (
        <Container>
            <ul>
                <Title>Produtos</Title>
                <Actions>
                    <Action onClick={handleClick}>
                        <svg>
                            <use xlinkHref="icons/icons.svg#icon-circle-with-plus"></use>
                        </svg>
                    </Action>
                </Actions>
            </ul>
        </Container>
    );
}

export default Navbar;