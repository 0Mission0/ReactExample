import { combineReducers } from 'redux';
import TodoListReducer from './TodoListReducer';
import TodoFilterReducer from './TodoFilterReducer';

const rootReducer = combineReducers({
    TodoListReducer,
    TodoFilterReducer
});

export default rootReducer;