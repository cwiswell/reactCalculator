import React from 'react';
import './Result.css';

type ResultProp = {
    formula: string | null;
    value: number | null;
}

const Result: React.FC<ResultProp> = (props) => {
    return (
      <div className="ResultWindow">
          <div className="FormulaWindow">
            {props.formula}
          </div>
          <div className="CurrentNumber">
            {props.value == null ? 0 : props.value}
          </div>          
      </div>
    );
}

export default Result;
