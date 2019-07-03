import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Result from './result-window';

describe("result component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Result value={null} formula={null} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('null value and null formula ', () => {
    const res = shallow(<Result value={null} formula={null}  />);

    expect(res.find(".FormulaWindow").text()).toEqual("");
    expect(res.find(".CurrentNumber").text()).toEqual("0");
  });
  
  it('null string value and null formula ', () => {
    const res = shallow(<Result value={'null'} formula={null}  />);
    
    expect(res.find(".FormulaWindow").text()).toEqual("");
    expect(res.find(".CurrentNumber").text()).toEqual("0");
  });

  it('1 value and 1 + 2 formula', () => {
    const res = shallow(<Result value={'1'} formula={'1 + 2'}  />);
    
    expect(res.find(".FormulaWindow").text()).toEqual("1 + 2");
    expect(res.find(".CurrentNumber").text()).toEqual("1");
  });

  it('string text value', () => {
    const res = shallow(<Result value={'TEST'} formula={null}  />);
    
    expect(res.find(".FormulaWindow").text()).toEqual("");
    expect(res.find(".CurrentNumber").text()).toEqual("TEST");
    
  });
});
