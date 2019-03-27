import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from '../const';

function CounterReducer(state = 0, action) {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

/* Set state.CounterReducer = CounterReducer */
const rootReducer = combineReducers(
    {
        CounterReducer
    }
);

export default rootReducer;