import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from './numberBtnComponent/number-button';
import FunctionButton from './functionBtnComponent/function-button';
import Result from './resultComponent/Result';
import { string } from 'prop-types';

type CalculatorState = {
  formula: string | null;
  result: number | null;
  currentNumber: number | null;
  previousNumber: number | null;
  currentOperator: string | null;
  showResult: boolean;
}

class Calculator extends Component<any, CalculatorState> {

  state: CalculatorState = {
    formula: null,
    result: null,
    previousNumber: null,
    currentNumber: null,
    currentOperator: null,
    showResult: false
  };

  numberClick = (value: number) => {
    if (this.state.currentNumber == null) {
      let newresult = this.state.result;
      if(this.state.currentOperator != null){
        newresult = this.state.previousNumber;
      }

      this.setState({ currentNumber: value, result: newresult, showResult:false});
    } else {
      let number = `${this.state.currentNumber}${value}`;
      this.setState({ currentNumber: +number });
    }
  }

  functionClick = (value: string) => {
    switch (value) {
      case "<":
        this.backSpace();
        break;
      case "CE":
        this.clearCurrentNumber();
        break;
      case "C":
        this.reset();
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        this.arithmetic(value);
        break;
      case "±":
        this.negateNumber();
        break;
      case ".":
        this.decimalNumber();
        break;
      case "=":
        this.equalsButton();
        break;
    }
  };

  decimalNumber(){
  }

  negateNumber(){
    if(this.state.currentNumber != null){
      this.setState({currentNumber: this.state.currentNumber * -1});
    }
  }

  equalsButton(){
    if(this.state.currentNumber != null && this.state.currentOperator != null && this.state.result != null){
      let newResult = this.performOperator(this.state.result, this.state.currentNumber, this.state.currentOperator);
      let newFormula = `${this.state.formula} ${this.state.currentNumber} = ${newResult}`;
      this.setState({result: newResult, formula: newFormula, showResult: true});
    }
  }

  arithmetic(value: string) {
    let newformula = this.addOrUpdateLatestFormulaOperator(value);
    if (newformula == null) {
      return;
    }

    let newresult = this.state.result;
    let prevNum = this.state.previousNumber;
    let showRes = false;
    if(this.state.currentNumber != null){
      if(newresult != null && this.state.currentOperator != null){
        newresult = this.performOperator(newresult, this.state.currentNumber, this.state.currentOperator);
        showRes = true;
        prevNum = newresult;
      }else{
        prevNum = this.state.currentNumber;
      }
    }

    this.setState({ formula: newformula, currentOperator: value, currentNumber: null, result: newresult, previousNumber: prevNum, showResult: showRes });
  };

  performOperator(number1: number, number2: number, operator: string) : number {
    switch(operator){
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "x":
        return number1 * number2;
      case "÷":
        return number1 / number2;
    }
    return 0;
  }

  addOrUpdateLatestFormulaOperator(operator: string): string | null {
    let formula = this.state.formula;
    let curNum = this.state.currentNumber;

    if (formula == null && this.state.currentNumber == null) {
      return null;
    }

    if (formula == null) {
      formula = `${curNum} ${operator}`;
    } else if (this.state.currentNumber == null) {
      formula = `${formula.slice(0, -2)} ${operator}`;
    } else {
      formula = `${formula} ${curNum} ${operator}`;
    }
    return formula;
  };

  clearCurrentNumber() {
    this.setState({ currentNumber: 0 });
  };

  reset() {
    this.setState({
      formula: null,
      result: null,
      previousNumber: null,
      currentNumber: null,
      currentOperator: null
    });
  }

  backSpace() {
    if (this.state.currentNumber == null) {
      return;
    }
    let numberString = `${this.state.currentNumber}`;
    if (numberString.length < 2) {
      this.setState({ currentNumber: null });
      return;
    }

    numberString = numberString.slice(0, -1);
    this.setState({ currentNumber: +numberString });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.numberClick(+event.key);
        break;
      case "+":
      case "-":
      case "x":
      case "=":
        this.functionClick(event.key);
        break;
      case "/":
        this.functionClick("÷");
        break;
      case "Backspace":
        this.functionClick("<");
        break;
    }
  }

  render() {
    console.log(this.state);
    return (
      <div tabIndex={0} onKeyUp={this.handleKeyPress} className="container">
        <div className="App">
          <Result value={this.state.showResult ? this.state.result : this.state.currentNumber} formula={this.state.formula} />

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

      </div>
    );
  }
}

export default Calculator;
