import {
    FETCH_ALL_NEWS,
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
export function handleFetchNews(params){
    //call the get_news here.
}