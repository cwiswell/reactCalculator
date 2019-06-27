import React from 'react';
import './FunctionButton.css';

type FunctionButtonProp = {
    value: string;
    click: Function;
}

const FunctionButton: React.FC<FunctionButtonProp> = (props) => {
    return (
      <div className="FunctionButton" onClick={() => props.click(props.value)}>
          {props.value}
      </div>
    );
}

export default FunctionButton;
