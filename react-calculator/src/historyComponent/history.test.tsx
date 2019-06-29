import React from 'react';
import ReactDOM from 'react-dom';
import History from './history';

describe("history component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<History formulaHistory={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
