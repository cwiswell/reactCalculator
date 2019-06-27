import React from 'react';
import './NumberButton.css';

type NumberButtonProp = {
    value: number;
    click: Function;
}

const NumberButton: React.FC<NumberButtonProp> = (props) => {
    return (
      <div className="NumberButton" onClick={() => props.click(props.value)}>
          {props.value}
      </div>
    );
}

export default NumberButton;
