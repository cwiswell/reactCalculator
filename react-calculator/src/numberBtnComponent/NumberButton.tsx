import React from 'react';
import './NumberButton.css';

export type NumberButtonProp = {
    value: number;
}

const NumberButton: React.FC<NumberButtonProp> = (props) => {
    return (
      <div className="NumberButton">
          {props.value}
      </div>
    );
}

export default NumberButton;
