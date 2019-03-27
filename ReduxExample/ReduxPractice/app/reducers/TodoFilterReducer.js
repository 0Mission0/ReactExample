import { FILTER_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from '../const';

const initialState = SHOW_ALL;

function TodoFilterReducer(state = initialState, action) {
    if( action.type == FILTER_TODO ) {
        return action.filter;
    }
    else {
        return state;
    }    
}

export default TodoFilterReducer;