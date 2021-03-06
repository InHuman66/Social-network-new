import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';
import { store } from './main/n2-bll/n1-state/redux-state';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </HashRouter>
    </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
