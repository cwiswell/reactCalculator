import React from 'react';
import './result-window.css';

type ResultProp = {
    formula: string | null;
    value: string | null;
}

const Result: React.FC<ResultProp> = (props) => {
    return (
      <div className="ResultWindow">
          <div className="FormulaWindow">
            {props.formula == null ? " " : props.formula}
          </div>
          <div className="CurrentNumber">
            {props.value == null || props.value == "null" ? 0 : props.value}
          </div>          
      </div>
    );
}

export default Result;
