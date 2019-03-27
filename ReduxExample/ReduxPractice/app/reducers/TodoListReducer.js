import { ADD_TODO, TOOGLE_TODO } from '../const';

const initialState = [
    {"id": "1", "text": "Item1", "isCompleted": true},
    {"id": "2", "text": "Item2", "isCompleted": true}
]

function TodoListReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {id: action.id, text: action.text, "isCompleted": false}
            ];
        case TOOGLE_TODO:
            return state.map(
                todo => (todo.id == action.id) ? { id: todo.id, text: todo.text, isCompleted: !todo.isCompleted } : todo
            );
        default:
            return state;
    }
}

export default TodoListReducer;