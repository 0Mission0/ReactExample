import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import InputBar from './components/InputBar';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(createCookieMiddleware(Cookies)));

class App extends React.Component {
    render() {
        return (
            <div>
                <InputBar />
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("app")
    );
}

render();