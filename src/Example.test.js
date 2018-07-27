import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Example>', () => {
    it('is a text test', () => {
        const wrapper = shallow(
            <div>
                <h3>Title</h3>
                <p>This is some text</p>
            </div>
        )
        expect(wrapper.find('h3').text()).toEqual("Title");
    })
})