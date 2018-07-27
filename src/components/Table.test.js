import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';
import Hand from './Hand';

configure({adapter: new Adapter()});

describe('<Table />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<Table />);
        expect(wrapper).toMatchSnapshot();
    })

    it('has two hands', () => {
        const wrapper = shallow(<Table />);
        expect(wrapper.find(Hand)).toHaveLength(2);
    })

})