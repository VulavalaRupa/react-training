import { ActionTypes } from "../Constants/action-types";

const setMovies = (movies) => {
    return{
        type : ActionTypes.SET_MOVIES,
        payload : movies
    }
}

export default setMovies;