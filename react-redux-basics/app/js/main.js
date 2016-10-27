
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../containers/app-container';
import {configureStore} from '../store/configure-store';
import {Provider} from 'react-redux';

const store = configureStore();
store.donors = [];

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    ,document.getElementById('app'));