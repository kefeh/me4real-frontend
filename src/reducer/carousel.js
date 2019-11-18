import {
    FETCH_ALL_CAROUSEL_REQUEST,
    FETCH_ALL_CAROUSEL_SUCCESS,
    FETCH_ALL_CAROUSEL_FAILURE,

    ADD_CAROUSEL_REQUEST,
    ADD_CAROUSEL_SUCCESS,
    ADD_CAROUSEL_FAILURE,

    EDIT_CAROUSEL_REQUEST,
    EDIT_CAROUSEL_SUCCESS,
    EDIT_CAROUSEL_FAILURE,

} from '../constant'
// constant for fetching carousel
export const FETCH_ALL_CAROUSEL_REQUEST = 'FETCH_ALL_CAROUSEL_REQUEST'
export const FETCH_ALL_CAROUSEL_SUCCESS = 'FETCH_ALL_CAROUSEL_SUCCESS'
export const FETCH_ALL_CAROUSEL_FAILURE = 'FETCH_ALL_CAROUSEL_FAILURE'

// constant for Adding carousel
export const ADD_CAROUSEL_REQUEST = 'ADD_CAROUSEL_REQUEST'
export const ADD_CAROUSEL_SUCCESS = 'ADD_CAROUSEL_SUCCESS'
export const ADD_CAROUSEL_FAILURE = 'ADD_CAROUSEL_FAILURE'

// constant for EDITING carousel
export const EDIT_CAROUSEL_REQUEST = 'EDIT_CAROUSEL_REQUEST'
export const EDIT_CAROUSEL_SUCCESS = 'EDIT_CAROUSEL_SUCCESS'
export const EDIT_CAROUSEL_FAILURE = 'EDIT_CAROUSEL_FAILURE'

export default function carousel(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            return {
                ...state,
                ...action.carousel,
            }

        default:
            return state
    }
}