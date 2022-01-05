import {actionTypes} from "../actions";

const initialState = {
    success: false
}

export default (state=initialState, action) => {
    switch (action.type){
        case actionTypes.CORRECT_GUESS:
            return {...initialState, success: true};
        default: return state
    }
}