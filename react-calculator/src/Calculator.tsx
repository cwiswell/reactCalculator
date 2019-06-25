import React, { Component } from 'react';
import './Calculator.css';

import Result from './resultComponent/Result';

export type CalculatorState = {
   result: string
}

class Calculator extends Component<any, CalculatorState> {
  constructor(props: any){
    super(props);
    this.state = { 
      result: this.props.defaultName 
    };
  }

  render() {
    return (
      <div className="App">
        <Result value={0}/>
      </div>
    );
  }
}

export default Calculator;
