import {
     CHANGE_SEARCH_FIELD,
     REQUEST_ROBOTS_PENDDING,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED 
} from "./constants";

export const setSearchField = (text) => {
    console.log(text);
    return{
        type: CHANGE_SEARCH_FIELD,
        playload: text
    }
}

export const requestRobots = () => (dispatch) =>{
    dispatch({type:REQUEST_ROBOTS_PENDDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, playload:data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, playload:error}))
}