import { FETCH_ALL_NEWS } from '../constant'
export default function news(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_NEWS:
            return {
                ...state,
                ...action.order,
            }

        default:
            return state
    }
}