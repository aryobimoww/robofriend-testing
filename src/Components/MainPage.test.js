import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchField:'',
        isPending: false
    }
    wrapper=shallow(<MainPage { ...mockProps}/>)
})

it('render mainpage without crashing', ()=>{
    expect(wrapper.debug()).toMatchSnapshot();
})

it('filter robots correctly', ()=>{
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots:[{
            id:1,
            name:'lena',
            email:'lena@gmail.com'
        }],
        searchField:'',
        isPending: false
    }
    const wrapper2=shallow(<MainPage { ...mockProps2}/>)
    expect(wrapper2.instance().filterRobots([])).toEqual([{
        id:1,
            name:'lena',
            email:'lena@gmail.com'
    }])
    
})

it('filter robots correctly2', ()=>{
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots:[{
            id:2,
            name:'rani',
            email:'rani@gmail.com'
        }],
        searchField:'',
        isPending: false
    }
    const wrapper3=shallow(<MainPage { ...mockProps3}/>)
    expect(wrapper3.instance().filterRobots([])).toEqual([{
            id:2,
            name:'rani',
            email:'rani@gmail.com'
    }])
    
})
