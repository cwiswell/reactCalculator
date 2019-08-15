import React, { useState } from 'react';
import './Calculator.css';

import NumberButton from './numberBtnComponent/number-button';
import FunctionButton from './functionBtnComponent/function-button';
import Result from './resultComponent/result-window';
import History from './historyComponent/history';

const Calculator: React.FC<any> = () => {
  const [formulaState, setFormulaState] = useState<string | null>(null);
  const [resultState, setResultState] = useState<number | null>(null);
  const [prevNumberState, setPrevNumberState] = useState<number | null>(null);
  const [currentNumber, setCurrentNumber] = useState<string | null>(null);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [history] = useState<Array<string>>([]);  

  const numberClick = (value: number) => {
    if (currentNumber === null) {
      let newresult = resultState;

      if (currentOperator !== null) {
        if (currentOperator === "÷" && value === 0) {
          setCurrentNumber(null);
          setCurrentOperator(null);
          setErrorMessage("Cannot divide by Zero");
          setShowError(true);
          setResultState(null);
          setFormulaState(null);
          return;
        }
        newresult = prevNumberState;
      }

      setCurrentNumber(`${value}`);
      setResultState(newresult);
      setShowResult(false);
      setShowError(false);
      setErrorMessage(null);
    } else {
      setCurrentNumber(`${currentNumber}${value}`);
    }
  }

  const functionClick = (value: string) => {
    switch (value) {
      case "<":
        backSpace();
        break;
      case "CE":
        clearCurrentNumber();
        break;
      case "C":
        reset();
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        arithmetic(value);
        break;
      case "±":
        negateNumber();
        break;
      case ".":
        decimalNumber();
        break;
      case "=":
        equalsButton();
        break;
    }
  };

  const decimalNumber = () => {
    if (currentNumber === null) {
      let newresult = resultState;

      if (currentOperator !== null) {
        newresult = prevNumberState;
      }
      setCurrentNumber('0.');
      setResultState(newresult);
    } else if (currentNumber.indexOf('.') < 0) {
      setCurrentNumber(`${currentNumber}.`);
    } else {
      return;
    }
  };

  const negateNumber = () => {
    if (currentNumber !== null) {
      let num = (+currentNumber) * -1;
      setCurrentNumber(`${num}`);
    }
  };

  const equalsButton = () => {
    if (currentNumber !== null && currentOperator !== null && resultState !== null) {
      let newResult = performOperator(resultState, +currentNumber, currentOperator);
      let newFormula = `${formulaState} ${currentNumber} = ${newResult}`;
      history.push(newFormula);
      setResultState(null);
      setFormulaState(null);
      setShowResult(false);
      setCurrentNumber(`${newResult}`);
      setCurrentOperator(null);
    }
  }

  const arithmetic = (value: string) => {
    let newformula = addOrUpdateLatestFormulaOperator(value);
    if (newformula === null) {
      return;
    }

    let newresult = resultState;
    let prevNum = prevNumberState;
    let showRes = false;
    if (currentNumber !== null) {
      if (newresult !== null && currentOperator !== null) {
        newresult = performOperator(newresult, +currentNumber, currentOperator);
        showRes = true;
        prevNum = newresult;
      } else {
        prevNum = +currentNumber;
      }
    }

    setFormulaState(newformula);
    setCurrentOperator(value);
    setCurrentNumber(null);
    setResultState(newresult);
    setPrevNumberState(prevNum);
    setShowResult(showRes);
  };

  const performOperator = (number1: number, number2: number, operator: string): number => {
    switch (operator) {
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

  const addOrUpdateLatestFormulaOperator = (operator: string): string | null => {
    let formula = formulaState;

    if (formula === null && currentNumber === null) {
      return null;
    }

    if (formula === null) {
      formula = `${currentNumber} ${operator}`;
    } else if (currentNumber === null) {
      formula = `${formula.slice(0, -2)} ${operator}`;
    } else {
      formula = `${formula} ${currentNumber} ${operator}`;
    }
    return formula;
  };

  const clearCurrentNumber = () => {
    setCurrentNumber('0');
  };

  const reset = () => {
    setFormulaState(null);
    setResultState(null);
    setPrevNumberState(null);
    setCurrentNumber(null);
    setCurrentOperator(null);
  }

  const backSpace = () => {
    if (currentNumber === null) {
      return;
    }
    let numberString = `${currentNumber}`;
    if (numberString.length < 2) {
      setCurrentNumber(null)
      return;
    }

    numberString = numberString.slice(0, -1);
    setCurrentNumber(numberString);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
        numberClick(+event.key);
        break;
      case "+":
      case "-":
      case "x":
      case "=":
        functionClick(event.key);
        break;
      case "/":
        functionClick("÷");
        break;
      case "Backspace":
        functionClick("<");
        break;
      case "Enter":
        equalsButton();
        break;
    }
  }

  let resultValue: string | null = "";
  if (showError) {
    resultValue = errorMessage;
  } else if (showResult) {
    resultValue = `${resultState}`;
  } else {
    resultValue = currentNumber;
  }

  return (
    <div tabIndex={0} onKeyUp={handleKeyPress} className="container">
      <div className="App">
        <Result value={resultValue} formula={formulaState} />

        <FunctionButton value={"CE"} click={functionClick} />
        <FunctionButton value={"C"} click={functionClick} />
        <FunctionButton value={"<"} click={functionClick} />

        <FunctionButton value={"÷"} click={functionClick} />

        <NumberButton value={7} click={numberClick} />
        <NumberButton value={8} click={numberClick} />
        <NumberButton value={9} click={numberClick} />

        <FunctionButton value={"x"} click={functionClick} />

        <NumberButton value={4} click={numberClick} />
        <NumberButton value={5} click={numberClick} />
        <NumberButton value={6} click={numberClick} />

        <FunctionButton value={"-"} click={functionClick} />

        <NumberButton value={1} click={numberClick} />
        <NumberButton value={2} click={numberClick} />
        <NumberButton value={3} click={numberClick} />

        <FunctionButton value={"+"} click={functionClick} />

        <FunctionButton value={"±"} click={functionClick} />
        <NumberButton value={0} click={numberClick} />
        <FunctionButton value={"."} click={functionClick} />

        <FunctionButton value={"="} click={functionClick} />
      </div>
      <History formulaHistory={history} />
    </div>
  );

}

export default Calculator;
