import { INCREMENT } from '../const';
import { DECREMENT } from '../const';
import { INCREMENT_IF_ODD, INCREMENT_ASYNC } from '../const';

export function incrementAction() {
    return {
        type: INCREMENT
    };
}

export function decrementAction() {
    return {
        type: DECREMENT
    };
}