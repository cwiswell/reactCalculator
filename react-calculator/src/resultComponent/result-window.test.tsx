import React from 'react';
import ReactDOM from 'react-dom';
import Result from './result-window';

describe("result component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Result value={null} formula={null} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
