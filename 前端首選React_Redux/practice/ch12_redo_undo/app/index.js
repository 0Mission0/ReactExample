import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Counter from './components/Counter';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Counter />
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