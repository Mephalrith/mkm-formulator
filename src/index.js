import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';
import Routes from './routes';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './assets/react-toolbox/theme.js';
import './assets/react-toolbox/theme.css';
import './assets/styles/screen.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes store={store}/>
            </ConnectedRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
