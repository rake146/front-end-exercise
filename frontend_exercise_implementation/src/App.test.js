import React from 'react';
import { shallow } from 'enzyme'
import Histogram from './components/histogram'

let inputObject = {
    "title": 'Pets in Cambridge',
    "data": {
      "cat": 55,
      "dog": 14,
      "lizard": 37, // There are a lot of Liz lovers in Cambridge. :D
      "elephant": 3,
      "geese": 14,
      "chimps": 2,
      "crocs": 5,
    }
}

// view tests
describe('<Histogram />', () => {
    it('renders exact amount of bars', () => {
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.bar').length).toEqual(7);
    });

    it('correct ordering of histogram keys', () => {
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.key').at(0).text()).toEqual("cat");
    });

    it('correct ordering of histogram values', () => {
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.val').at(0).text()).toEqual("55");
    });

    it('least occured animal at the bottom', () => {
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.key').at(6).text()).toEqual("chimps");
    });

    it('initial bar colour is correct', () => {
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.bar').at(0).prop('style')).toHaveProperty('backgroundColor', '#f06d06');
    });

    it('5th and 6th bar colour the same', () => {
        // 5th element = #ffffa6
        const histogram = shallow(<Histogram obj={inputObject} color='#F06D06' maxBarWidth={200}/>);
        expect(histogram.find('div.bar').at(5).prop('style')).toHaveProperty('backgroundColor', '#ffffa6');
    });
})
