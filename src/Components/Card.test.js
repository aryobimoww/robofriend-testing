import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';
it('expect to render card component', ()=>{
    const wrapper = (shallow(<Card/>));
    expect(wrapper.debug()).toMatchSnapshot();
})
