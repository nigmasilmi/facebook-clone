import * as ActionTypes from './actionTypes';

export const initialState = {
    user: null
}


const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;