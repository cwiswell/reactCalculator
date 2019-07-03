import React from 'react';
import './history.css';

type HistoryProp = {
    formulaHistory: Array<string>;
}

const History: React.FC<HistoryProp> = (props) => {
    let historyList = props.formulaHistory.map((value, key) =>{
        return (<div key={key} className="historyItem"> {value} </div>)
    });

    return (
      <div className="historyWindow">
          {historyList}
      </div>
    );
}

export default History;
