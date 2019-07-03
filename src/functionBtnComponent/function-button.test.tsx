import React from 'react';
import ReactDOM from 'react-dom';
import FunctionButton from './function-button';

describe("function button component tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FunctionButton value={""} click={() =>{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
