
import { GlobalStyle } from './styles/global';
import { Provider } from 'react-redux'

import Home from './pages/home';

import store from './redux/store';

function App() {

    return (
        <Provider store={store}>
            <GlobalStyle />
            <Home />
        </Provider>
    );
}

export default App;
