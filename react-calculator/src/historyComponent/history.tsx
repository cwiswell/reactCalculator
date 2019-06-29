import React from 'react';
import './history.css';

type HistoryProp = {
    formulaHistory: Array<string>;
}

const History: React.FC<HistoryProp> = (props) => {
    return (
      <div className="historyWindow">
          {props.formulaHistory.map((value, key) =>{
              return (<div key={key}> {value} </div>)
          })}
      </div>
    );
}

export default History;
