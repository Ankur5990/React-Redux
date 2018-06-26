export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_USERS = 'SET_USERS';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export function changePage(data) {
    return {
        type: CHANGE_PAGE,
        data: data
    }
}
export function setUsers(data){
    return {
        type: SET_USERS,
        data: data
    }
}

export function incrementCounter(){
    return {
        type: INCREMENT_COUNTER,
        data: null
    }
}

export function decrementCounter(){
    return {
        type: DECREMENT_COUNTER,
        data: null
    }
}