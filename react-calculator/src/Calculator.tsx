import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from  './numberBtnComponent/NumberButton';
import FunctionButton from './functionBtnComponent/FunctionButton';
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

  functionClick = (value: string) => {
    console.log(value);
  };

  render() {
    console.log("rendering...")
    return (
      <div className="App">
        <Result value={this.state.result}/>
        
        <FunctionButton value={"CE"} click={this.functionClick} />
        <FunctionButton value={"C"} click={this.functionClick} />
        <FunctionButton value={"<"} click={this.functionClick} />

        <FunctionButton value={"÷"} click={this.functionClick} />

        <NumberButton value={7} click={this.numberClick} />
        <NumberButton value={8} click={this.numberClick} />
        <NumberButton value={9} click={this.numberClick} />

        <FunctionButton value={"x"} click={this.functionClick} />
        
        <NumberButton value={4} click={this.numberClick} />
        <NumberButton value={5} click={this.numberClick} />
        <NumberButton value={6} click={this.numberClick} />

        <FunctionButton value={"-"} click={this.functionClick} />
        
        <NumberButton value={1} click={this.numberClick} />
        <NumberButton value={2} click={this.numberClick} />
        <NumberButton value={3} click={this.numberClick} />

        <FunctionButton value={"+"} click={this.functionClick} />

        <FunctionButton value={"±"} click={this.functionClick} />
        <NumberButton value={0} click={this.numberClick} />
        <FunctionButton value={"."} click={this.functionClick} />

        <FunctionButton value={"="} click={this.functionClick} />
      </div>
    );
  }
}

export default Calculator;
