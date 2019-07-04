import React from 'react';
import './number-button.css';

type NumberButtonProp = {
    value: number;
    click: (value: number) => void;
}

const NumberButton: React.FC<NumberButtonProp> = (props) => {
    return (
      <div className="NumberButton" onClick={() => props.click(props.value)}>
          {props.value}
      </div>
    );
}

export default NumberButton;
