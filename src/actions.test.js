import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from "./constants";
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])
it('should create an action to search robots',()=>{
    const text= 'uooo';
    const expectedAction = {
        type:CHANGE_SEARCH_FIELD,
        playload:text 
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})
it('handle request robots API',()=>{
    const expectedAction2={
        type:REQUEST_ROBOTS_PENDDING
    } 
    const store= mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    
    expect(action).toEqual({type:REQUEST_ROBOTS_PENDDING})
})