import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';
import Hand from './Hand';
import Interface from './Interface';
import Card from './Card'

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

    it('has correct text on the "hit" button', () => {
        const wrapper = mount(<Table />);
        expect(wrapper.find(Interface).find('#hit-button').text()).toEqual('Hit');
    })

    it('adds a card to playerHand on clicking "hit"', () => {
        const wrapper = mount(<Table />);
        expect(wrapper.find(Hand).last().find(Card)).toHaveLength(2);
        wrapper.find(Interface).find('#hit-button').simulate('click');
        expect(wrapper.find(Hand).last().find(Card)).toHaveLength(3);
    })
    
})