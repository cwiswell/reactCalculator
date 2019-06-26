import React from 'react';
import './Result.css';

export type ResultProp = {
    value: number | null;
}

const Result: React.FC<ResultProp> = (props) => {
    return (
      <div className="ResultWindow">
          {props.value == null ? 0 : props.value}
      </div>
    );
}

export default Result;
