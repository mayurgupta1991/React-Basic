import {
    ADD_QUANTITY,
    REDUCE_QUANTITY,
    DELETE_ITEM
} from '../constants';

export function addQuantity(add) {
    return {
        type: ADD_QUANTITY,
        add
    }
}

export function reduceQuantity(reduce) {
    return {
        type: REDUCE_QUANTITY,
        reduce
    }
}

export function delItem(item) {
    return {
        type: DELETE_ITEM,
        item
    }
}
