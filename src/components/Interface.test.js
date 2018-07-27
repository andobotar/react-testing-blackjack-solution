import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Interface from './Interface';
import Outcome from './Outcome'

configure({adapter: new Adapter()});

describe('<Interface />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Interface />
        )
    })

    it('has an Outcome child component', () => {
        expect(wrapper.find(Outcome)).toHaveLength(1);
    })

    it('has two children with .score class name', () => {
        expect(wrapper.find('.score')).toHaveLength(2);
    })

    it('receives scores correctly', () => {
        wrapper = shallow(<Interface computerScore = {17} />);
        expect(wrapper.find('.score').first().text()).toEqual('Dealer Score : 17');
    })

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

})