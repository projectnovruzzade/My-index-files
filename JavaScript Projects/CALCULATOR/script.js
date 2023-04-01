let inputBox = document.querySelector(".calculator-txt");
let keys = document.querySelector(".buttons-group")


let inputValue = "0";
let firstValue = null;
let operator = null;
let controlSecondValue = false;

updatedDiplay();


function updatedDiplay() {
    inputBox.value = inputValue;
}


keys.addEventListener("click",function(e){
    let element = e.target;

    if(!element.matches("button")) return;

    if(element.classList.contains("operator")) {
        // console.log("operator",element.value);
        enterOperator(element.value);
        updatedDiplay();
        return;
    }
     if(element.classList.contains("decimal")) {
        // console.log("decimal",element.value)
        enterDecimal();
        updatedDiplay();
        return;
    } 
    if(element.classList.contains("clear")) {
        // console.log("clear",element.value);
        clearInput();
        updatedDiplay();
        return;
    }

    enterNumber(element.value);
    updatedDiplay();
});


function enterNumber(num) {
    if(controlSecondValue === true) {
        inputValue = num;
        controlSecondValue = false;
    }
    else {
        if(inputValue === "0") {
            inputValue = num;
        }else {
            inputValue += num;
        }
    }
    console.log("input value: ",inputValue,"operator: ",operator,"first value",firstValue,controlSecondValue)

}

function enterDecimal() {
    if(!inputValue.includes(".")) {
        inputValue += ".";
    }
}

function clearInput() {
    inputValue = "0";
}



function enterOperator(funOperator) {
    let value = parseFloat(inputValue);

    if(firstValue === null) {
        firstValue = value;
    }

    controlSecondValue = true;
    operator = funOperator;
    console.log("input value: ",inputValue,"operator: ",operator,"first value",firstValue,controlSecondValue)
}