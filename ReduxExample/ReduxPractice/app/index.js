import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ToolBar from './components/ToolBar';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import rootReducer from './reducers';

const store = createStore(rootReducer);;

class App extends React.Component {
    render() {
        return (
            <div>
                <ToolBar />
                <TodoList />
                <Filters />
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