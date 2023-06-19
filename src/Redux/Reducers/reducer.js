import { ActionTypes } from "../Constants/action-types"

const initialState = []
const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return payload;
        default:
            return state;
    }
}

export default movieReducer