import { 
    FETCH_ALL_NEWS_REQUEST,
    FETCH_ALL_NEWS_SUCCESS,
    FETCH_ALL_NEWS_FAILURE
 } from '../constant'

export default function news(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_NEWS_REQUEST:
            return {
                ...state,
                ...action.order,
            }

        default:
            return state
    }
}