import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    ONCLIK_COUNT
} from "./constants";

const initialStateSearch ={
    searchField:'',

}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.playload})
        default:
            return state;
    }
} 

const initialStateRobots = {
    isPending:false,
    robots:[]
}

export const requestRobots = (state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDDING:
            return Object.assign({},state, {isPending:true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots: action.playload, isPending:false});
         case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error:action.playload, isPending:false});
        default:
            return state;
    }
}
const initialStateCount = {
    onclickcount:0
}
export const clickCounter = (state=initialStateCount,action={})=>{
    switch(action.type){
        case ONCLIK_COUNT:
            return Object.assign({},state,{onclickcount: action.playload})
        default:
            return state;
    }
}