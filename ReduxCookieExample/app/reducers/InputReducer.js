import { SET_INPUT } from '../const';

const initialState = 'Hello, World!';

function InputReducer(state = initialState, action) {
    switch(action.type) {
        case SET_INPUT:
            return action.text;
        default:
            return state;
    }
}

export default InputReducer;