import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import History from './history';

describe("history component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<History formulaHistory={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render history of 1 item', () => {
    const btn = shallow(<History formulaHistory={["test"]} />);

    expect(btn.find(".historyItem").text()).toEqual("test");
  });
  
  it('render history of 3 item', () => {
    const btn = shallow(<History formulaHistory={["test", "test2", "test3"]} />);

    expect(btn.find(".historyItem").length).toEqual(3);
  });
})
