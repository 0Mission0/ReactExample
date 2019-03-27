import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import CounterReducer from './CounterReducer';
import { INCREMENT, DECREMENT, COUNTER_UNDO, COUNTER_REDO } from '../const';

/* Set state.CounterReducer = CounterReducer */
// const rootReducer = combineReducers({
//     CounterReducer
// });

const rootReducer = combineReducers({
    CounterReducer: undoable(CounterReducer, {
        filter: includeAction([INCREMENT, DECREMENT]),
        limit: 10,
        debug: true,
        undoType: COUNTER_UNDO,
        redoType: COUNTER_REDO
    })
});

export default rootReducer;