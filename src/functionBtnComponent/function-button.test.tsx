import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FunctionButton from './function-button';

describe("function button component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FunctionButton value={""} click={() =>{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('display + value', () => {
    const btn = shallow(<FunctionButton value={"+"} click={() => {}} />);

    expect(btn.find(".FunctionButton").text()).toEqual("+");
  });

  it('display - value', () => {
    const btn = shallow(<FunctionButton value={"-"} click={() => {}} />);

    expect(btn.find(".FunctionButton").text()).toEqual("-");
  });
  
  it('click element', () => {
    const mockFn = jest.fn();
    const res = shallow(<FunctionButton value={"test"} click={mockFn} />);
    res.simulate('click');

    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
