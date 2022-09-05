import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import store from './state/redux-store.js';
import { createRoot } from 'react-dom/client';
import {HashRouter} from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


