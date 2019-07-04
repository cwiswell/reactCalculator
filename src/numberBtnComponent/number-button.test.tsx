import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NumberButton from './number-button';

describe("number button component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberButton value={1} click={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('display 1 value', () => {
    const res = shallow(<NumberButton value={1} click={() => {}} />);

    expect(res.find(".NumberButton").text()).toEqual("1");
  });

  it('display 2 value', () => {
    const res = shallow(<NumberButton value={2} click={() => {}} />);

    expect(res.find(".NumberButton").text()).toEqual("2");
  });
  
  it('click element', () => {
    const mockFn = jest.fn();
    const res = shallow(<NumberButton value={3} click={mockFn} />);
    res.simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  });
})
