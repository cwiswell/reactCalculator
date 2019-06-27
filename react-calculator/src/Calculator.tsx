import React, { Component } from 'react';
import './Calculator.css';

import NumberButton from './numberBtnComponent/NumberButton';
import FunctionButton from './functionBtnComponent/FunctionButton';
import Result from './resultComponent/Result';

type CalculatorState = {
  formula: string | null;
  result: number | null;
  currentNumber: number | null;
  previousNumber: number | null;
  currentOperator: string | null;
}

class Calculator extends Component<any, CalculatorState> {

  state: CalculatorState = {
    formula: null,
    result: null,
    previousNumber: null,
    currentNumber: null,
    currentOperator: null
  };

  numberClick = (value: number) => {
    if (this.state.currentNumber == null) {
      this.setState({ currentNumber: value });
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
      case "+":
      case "-":
      case "x":
      case "÷":
        this.arithmetic(value);
        break;
    }
  };

  arithmetic(value: string) {
    let newformula = this.addOrUpdateLatestFormulaOperator(value);
    if (newformula == null) {
      return;
    }

    this.setState({ formula: newformula, currentOperator: value, currentNumber: null });
  };

  addOrUpdateLatestFormulaOperator(operator: string): string | null {
    let formula = this.state.formula;
    let curNum = this.state.currentNumber;

    if(formula == null && this.state.currentNumber == null){
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
    }
  }

  render() {
    return (
      <div tabIndex={0} onKeyDown={this.handleKeyPress} className="container">
        <div className="App">
          <Result value={this.state.currentNumber} formula={this.state.formula} />

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
