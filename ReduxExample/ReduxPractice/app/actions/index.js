import { ADD_TODO, TOOGLE_TODO, FILTER_TODO } from '../const';

let nextTodoId = 3;
export function addTodoAction(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}

export function toogleTodoAction(id) {
    return {
        type: TOOGLE_TODO,
        id
    };
}

export function setFilterAction(filter) {
    return {
        type: FILTER_TODO,
        filter
    };
}