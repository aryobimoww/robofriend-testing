import {
     CHANGE_SEARCH_FIELD,
     REQUEST_ROBOTS_PENDDING,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED ,
} from "./constants";
import { apiCall  } from  './api/api';
export const setSearchField = (text) => {
    console.log(text);
    return{
        type: CHANGE_SEARCH_FIELD,
        playload: text
    }
}


export const requestRobots = () => (dispatch) =>{
    dispatch({type:REQUEST_ROBOTS_PENDDING})
    apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, playload:data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, playload:error}))
}