import { 
    FETCH_ALL_EVENTS_REQUEST,
    FETCH_ALL_EVENTS_SUCCESS,
    FETCH_ALL_EVENTS_FAILURE

} from '../constant'

export default function event(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            return {
                ...state,
                ...action.order,
            }

        default:
            return state
    }
}