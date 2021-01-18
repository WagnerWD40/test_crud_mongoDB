import { useReducer } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import {
    Container,
    Content,
    Row,
    Column,
    ButtonRow,
    Button,
} from './styles/form-product';

import { PRODUCT_ACTIONS } from '../../redux/actions/product-action';
import { MODAL_ACTIONS } from '../../redux/actions/modal-actions';
import { MODAL_TYPES } from '../../constants/modal-types';

const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    allowNegative: false,
    allowLeadingZeroes: false,
}

const initialState = {
    _id: 'placeholder',
    Nome: '',
    Descricao: '',
    Valor: '',
    Vencimento: '',
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value,
    }
}

function FormProduct({ createProduct, updateProduct }) {
    const reduxDispatch = useDispatch();
    const { modalType, productData } = useStore().getState().modalState;

    if(productData?.Vencimento) {
        productData.Vencimento = productData?.Vencimento.substring(0, 10);
    }

    const [state, dispatch] = useReducer(reducer, productData ? productData : initialState);

    const currencyMask = createNumberMask(defaultMaskOptions);

    function handleChange(e) {
        dispatch({
            field: e.target.name,
            value: e.target.value
        });
    }

    function handleCancel() {
            reduxDispatch({ type: MODAL_ACTIONS.CLOSE });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formattedDTO = {
            ...state,
            Valor: state.Valor.toString().replace(/\D/g, ''),
        }

        switch(modalType) {
            case MODAL_TYPES.ADD:
                createProduct(formattedDTO);
                break;

            case MODAL_TYPES.UPDATE:
                updateProduct(formattedDTO);
                break;

            default:
                return;
        }      
    }

    function checkIfFieldsAreFilled() {
        return !Object.entries(state).every(([field, value]) => value !== "");
    }

    const { _id, Nome, Descricao, Valor, Vencimento } = state;

    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>{`${modalType} Produto`}</legend>
                        <input
                            type="hidden"
                            name="_id"
                            value={_id} />

                        <label htmlFor="Nome">Nome</label>
                        <input
                            id="Nome"
                            type="text"
                            name="Nome"
                            value={Nome}
                            onChange={handleChange} />

                        <label htmlFor="Descricao">Descrição</label>
                        <input
                            id="Descricao"
                            type="text"
                            name="Descricao"
                            value={Descricao} 
                            onChange={handleChange} />

                        <Row>
                            <Column>
                                <label htmlFor="Valor">Valor</label>
                                <MaskedInput
                                    mask={currencyMask}
                                    id="Valor"
                                    type="text"
                                    name="Valor"
                                    value={Valor}
                                    onChange={handleChange} />
                            </Column>
                            <Column>
                                <label htmlFor="Vencimento">Data de Validade</label>
                                <input
                                    id="Vencimento"
                                    type="date"
                                    name="Vencimento"
                                    value={Vencimento}
                                    onChange={handleChange} />
                            </Column>
                        </Row>
                        
                        <ButtonRow>
                            <Button type="submit" disabled={checkIfFieldsAreFilled()}>
                                {modalType}
                            </Button>
                            <Button type="button" cancelButton={true} onClick={handleCancel}>
                                Cancelar
                            </Button>
                        </ButtonRow>
                    </fieldset>
                </form>
            </Content>
        </Container>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct: (payload) => dispatch({ type: PRODUCT_ACTIONS.CREATE_PRODUCT_REQUEST, payload }),
        updateProduct: (payload) => dispatch({ type: PRODUCT_ACTIONS.UPDATE_PRODUCT_REQUEST, payload }),
    }
}

export default connect(null, mapDispatchToProps)(FormProduct);