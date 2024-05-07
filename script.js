let firstNumber = "";
let secondNumber = "";
let operation = "";
let isOperationSelected = false;
let currentValue = "";

function display(displayValue) {
  let displayText = document.querySelector("p");
  displayText.textContent = displayValue;
}

function operate(firstNumber, secondNumber, operation) {
  let result;
  const num1 = parseInt(firstNumber);
  const num2 = parseInt(secondNumber);

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "÷":
      if (num2 === 0) {
        result = "divide by zero error";
      } else {
        result = num1 / num2;
      }
      break;
    case "×":
      result = num1 * num2;
      break;
    default:
      result = "Invalid operation";
  }

  return result;
}

//adding event listners to numbers
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentValue.length < 14 && isNaN(currentValue) === false) {
      currentValue += button.value;
      display(currentValue);
    }
    else {
      currentValue = "";   // if current is an operation symbol
      currentValue += button.value;
      display(currentValue);
    }

  })
})

//BACKSPACE button
const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
    display(currentValue);
  }
  else {
    if (isNaN(currentValue)) {    //For Operation symbol
      currentValue = firstNumber
      firstNumber = "";
      operation = "";
      isOperationSelected = false;
      display(currentValue);
    }
    else {
      currentValue = "";        //if last number
      display("000")
    }
  }
})

//adding event listners to operations
let operationButtons = document.querySelectorAll(".operation")
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("operation button clicked")
    if (currentValue != "") {
      operation = button.value;
      console.log("operation selected: ", operation)
      firstNumber = currentValue;
      console.log("first no.", firstNumber)
      currentValue = operation;
      console.log("current ", currentValue)
      isOperationSelected = true;
      display(currentValue)
    }
  })
})

//CLEAR button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  let displayText = document.querySelector("p");
  displayText.textContent = "000";
  currentValue = "";
  isOperationSelected = false;
})

// Equal button
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {

  secondNumber = currentValue;
  let answer = operate(firstNumber, secondNumber, operation);
  if (answer == "divide by zero error") {
    display(answer);
    currentValue = "";
    firstNumber= "";
    secondNumber= "";
    isOperationSelected = false;

  }
  else {
    if(answer%1==0){
      firstNumber = answer;
      secondNumber = "";
      currentValue = answer;
      display(answer);
      isOperationSelected = false;
    }
    else{
      let answer_roundup = answer.toFixed(12);
      firstNumber = answer_roundup;
      secondNumber = "";
      currentValue = answer_roundup;
      display(answer_roundup);
      isOperationSelected = false;
    }
    
  }
})

