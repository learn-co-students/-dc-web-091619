import React from 'react';
import BandContainer from './BandContainer'
import Band from '../components/Band'
import {shallow} from 'enzyme'

describe("Testing react dom" , () => {
    it("should render band components" , () => {
        let mockBands = [
            {
                id: 1,
                name: "backstreetboys"
            },
            {
                id: 2,
                name: "Spice girls"
            }
        ]

        let wrapper = shallow(<BandContainer bands={mockBands} />)

        expect(wrapper.find(Band).length).toBe(2)
    })
})