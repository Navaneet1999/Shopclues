import { STORE_DATA } from "./actionTypes"

const init = {
    store: [],
}

export const storeReducer = (state = init, {type, payload}) => {
    switch(type){
        case STORE_DATA:
            return {...state, store: payload}
        default:
            return {...state};
    }
}