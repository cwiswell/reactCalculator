import React from 'react';
import './Result.css';

export type ResultProp = {
    value: number;
}

const Result: React.FC<ResultProp> = (props) => {
    return (
      <div className="ResultWindow">
          {props.value}
      </div>
    );
}

export default Result;
