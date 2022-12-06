import { ActionTypes } from "../action-types"


export const fetchMovies = (movies) => {
    return {
        type : ActionTypes.FETCH_MOVIES,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type : ActionTypes.SELECTED_MOVIE,
        payload : movie
    }
}

export const removeSelectedMovie = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_MOVIE,
        payload : null
    }
}