import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('calculator tests', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shallow renders without crashing', () => {
    shallow(<Calculator />);
  })
});

