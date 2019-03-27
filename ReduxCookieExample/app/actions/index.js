import { SET_INPUT } from '../const';

export function setInputAction(text) {
    return {
        type: SET_INPUT,
        text
    };
}