import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Counter from './components/Counter';
import CounterReducer from './reducers/CounterReducer';

const store = createStore(CounterReducer);

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