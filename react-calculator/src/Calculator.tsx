import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from  './numberBtnComponent/NumberButton';
import FunctionButton from './functionBtnComponent/FunctionButton';
import Result from './resultComponent/Result';

export type CalculatorState = {
   result: number | null;
   currentNumber: number ;
   currentOperator: string | null;
}

class Calculator extends Component<any, CalculatorState> {
  constructor(props: any){
    super(props);
    this.state = { 
      result: null,
      currentNumber: 0,
      currentOperator: null
    };
  }

  numberClick = (value: number) =>{
    if(this.state.currentNumber == 0){
      this.setState({currentNumber: value});
    }else{
      let number =  `${this.state.currentNumber}${value}`;
      this.setState({currentNumber: +number});
    }
  }

  functionClick = (value: string) => {
    switch(value){
      case "<":
        this.backSpace();
        break;
      case "CE":
        this.clearCurrentNumber();
        break;
    }
  };

  clearCurrentNumber(){
    this.setState({currentNumber: 0});
  }

  backSpace(){
    if(this.state.currentNumber == null){
      return;
    }
    let numberString = `${this.state.currentNumber}`;
    if(numberString.length < 2){
      this.setState({currentNumber: 0});
      return;
    }

    numberString = numberString.slice(0, -1);
    this.setState({currentNumber: +numberString});
  };

  render() {
    return (
      <div className="App">
        <Result value={this.state.currentNumber}/>
        
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
