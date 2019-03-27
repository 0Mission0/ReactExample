import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

function increment() {
    return { type: 'INCREMENT' };
}

function incrementTest() {
    return foo => {
        foo(increment());
    };
}

store.dispatch(incrementTest());