import { INCREMENT } from '../const';
import { DECREMENT } from '../const';
import { COUNTER_UNDO, COUNTER_REDO } from '../const';

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

export function counterUndoAction() {
    return {
        type: COUNTER_UNDO
    };
}

export function counterRedoAction() {
    return {
        type: COUNTER_REDO
    };
}