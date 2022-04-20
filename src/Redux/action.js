import { STORE_DATA } from "./actionTypes"

export const storeData = (data) => {
    return { type: STORE_DATA, payload: data};
}