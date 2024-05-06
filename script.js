let firstNumber ="";
let operation="";
let isOperationSelected= false;
let secondNumber;
let currentValue= "";

function display(displayValue){
    let displayText = document.querySelector("p");
    displayText.textContent=displayValue;
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
          result = "Cannot divide by zero";
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
numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(currentValue.length < 14){
            currentValue+=button.value;
        }
        display(currentValue);
    })
})

//adding event listners to operations
let operationButtons = document.querySelectorAll(".operation")
operationButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(currentValue!="" && isOperationSelected===false){
            operation = button.value;
            display(operation);
            if(firstNumber===""){
                firstNumber=currentValue;
            }
            currentValue="";
            isOperationSelected="true";
            console.log("firstnumber=",firstNumber);
            console.log("operation selected=",operation);
            console.log("currentValue=", currentValue);
        }
    })
})

//CLEAR button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", ()=> {
    let displayText = document.querySelector("p");
    displayText.textContent="000";
    currentValue="";
})

//BACKSPACE button
const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", ()=> {
    currentValue= currentValue.slice(0,-1);
    display(currentValue);
})

//equal button
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", ()=> {
    console.log("first number=",firstNumber);
    console.log("operation selected=",operation);
    console.log("current Value=", currentValue);
    console.log("second number=", secondNumber);

    secondNumber = currentValue;
    console.log("second number=", secondNumber);
    let answer = operate(firstNumber,secondNumber,operation);
    display(answer);
    firstNumber= answer;
    secondNumber="";
    isOperationSelected=false;
})
