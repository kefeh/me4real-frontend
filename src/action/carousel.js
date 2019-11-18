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

} from '../constant';
import { get_news } from '../helper/api'

//payload is the response or data to be set to store
function requestHelper(req, payload = null) {
    return {
        type: req,
        payload,
    }
}

// req is going to be the constant 
//payload is the response or data to be set to store
function responseHelper(req, payload) {
    return {
        type: req,
        payload,
    }
}
export function handleFetchCarousel(params) {
    //call the get_news here.
}
export function handleEditCarousel(params) {
    //call the get_news here.
}
}
export function handleAddCarousel(params) {
    //call the get_news here.
}