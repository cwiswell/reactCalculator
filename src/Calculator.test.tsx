import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';

describe('calculator tests', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shallow renders without crashing', () => {
    const calc = shallow(<Calculator />);
  })
  
  it('appropriate number of buttons renders', () => {
    const calc = mount(<Calculator />);

    expect(calc.find(".NumberButton").length).toEqual(10);
    expect(calc.find(".FunctionButton").length).toEqual(10);
  })
});

