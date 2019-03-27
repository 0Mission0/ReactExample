import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers/counter';

const store = createStore(counter);

class App extends React.Component {
    render() {
        return (
            <Counter 
                value={ store.getState() }
                increment={ () => store.dispatch({ type: 'INCREMENT' }) }
                decrement={ () => store.dispatch({ type: 'DECREMENT' }) }
            />
        );
    }
}

function render() {
    ReactDOM.render(<App />, document.getElementById("app"));
}

store.subscribe(render);

render();