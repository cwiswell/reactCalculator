import React from 'react';
import ReactDOM from 'react-dom';
import NumberButton from './number-button';

describe("number button component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NumberButton value={1} click={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
