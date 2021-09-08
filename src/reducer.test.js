import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    ONCLIK_COUNT
} from "./constants";
import * as reducer from './reducer';
const initialStateSearch ={
    searchField:'',
}

describe('serachRobots', ()=>{
    it('should return the initial satte',()=>{
       expect( reducer.searchRobots(undefined,{})).toEqual({searchField:''})
    })

it('should return change_searchfield',()=>{
    expect( reducer.searchRobots(initialStateSearch,{
        type: CHANGE_SEARCH_FIELD,
        playload:'abc'
    })).toEqual({
        searchField:'abc'
    })
 })
})

describe('requestRobots',()=>{
    const initialStateRobots = {
        isPending:false,
        robots:[],
        
    }
    it('request robots should return intialStateRobot', ()=>{
        expect(reducer.requestRobots(undefined,{})).toEqual(initialStateRobots)
    })
    it('should handle request robots pending', ()=>{
        expect(reducer.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_PENDDING,
            playload:{isPending:true}
        })).toEqual({
            robots:[],
            isPending:true
        })
    })
    it('should handle request robots succes', ()=>{
        expect(reducer.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_SUCCESS,
            playload:[{
                id:123,
                name:'jane',
                email:'jane@gmail.com'
            }]
        })).toEqual({
            robots:[{
                id:123,
                name:'jane',
                email:'jane@gmail.com'
            }],
            isPending:false
        })
    })
})