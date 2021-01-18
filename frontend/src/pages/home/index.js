import { connect } from 'react-redux';

import {
    Container
} from './styles/home';

import {
    FormProduct,
    ProductList,
    Navbar,
} from '../../components';

function Home({ modalState }) {
    const { open } = modalState;

    return (
        <Container>
            <Navbar />
            <ProductList />
            {open && <FormProduct />}
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        modalState: state.modalState,
    }
}

export default connect(mapStateToProps)(Home);