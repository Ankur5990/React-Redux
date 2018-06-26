import { CHANGE_PAGE, SET_USERS, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../action/action';

export function rootReducer(state, action) {
    // debugger;

    switch(action.type) {
        case CHANGE_PAGE:
            return Object.assign({}, state, { pageName: action.data });
        case SET_USERS:
            var user = state.users;
            user.push(action.data);
            return Object.assign({}, state, { users: user});
        case INCREMENT_COUNTER:
            let incCounterValue = state.counter + 1;
            return Object.assign({}, state, { counter: incCounterValue });
        case DECREMENT_COUNTER:
            let decCounterValue = state.counter - 1;
            return Object.assign({}, state, { counter: decCounterValue });
    }
    return {
        pageName: 'list',
        users: [
            {name: 'abc'}
        ],
        counter: 0
    }
}