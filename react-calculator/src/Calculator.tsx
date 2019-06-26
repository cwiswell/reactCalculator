import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from  './numberBtnComponent/NumberButton';
import Result from './resultComponent/Result';

export type CalculatorState = {
   result: number | null
}

class Calculator extends Component<any, CalculatorState> {
  constructor(props: any){
    super(props);
    this.state = { 
      result: null
    };
  }

  numberClick = (value: number) =>{
    if(this.state.result == null){
      this.setState({result: value});
    }else{
      let number =  `${this.state.result}${value}`;
      this.setState({result: +number});
    }
  }

  render() {
    console.log("rendering...")
    return (
      <div className="App">
        <Result value={this.state.result}/>
        
        <NumberButton value={7} click={this.numberClick}/>
        <NumberButton value={8} click={this.numberClick}/>
        <NumberButton value={9} click={this.numberClick}/>
      </div>
    );
  }
}

export default Calculator;
