import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from  './numberBtnComponent/NumberButton';
import Result from './resultComponent/Result';

export type CalculatorState = {
   result: number
}

class Calculator extends Component<any, CalculatorState> {
  constructor(props: any){
    super(props);
    this.state = { 
      result: 0
    };
  }

  numberClick = (value: number) =>{
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <Result value={0}/>
        
        <NumberButton value={7} click={this.numberClick}/>
        <NumberButton value={8} click={this.numberClick}/>
        <NumberButton value={9} click={this.numberClick}/>
      </div>
    );
  }
}

export default Calculator;
