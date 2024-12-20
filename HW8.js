document.getElementById("calculate-btn").addEventListener("click", function () {
    // Fetch user inputs
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");

    // Validate inputs
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Result = Invalid input. Please enter numbers.";
        return;
    }

    // Perform calculation based on operator
    let result;
    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        default:
            result = "Invalid operation.";
    }

    // Display result
    resultElement.textContent = `Result = ${result}`;
});

// Define operations as functions
function add(a, b) {
    return (a + b).toFixed(2);
}

function subtract(a, b) {
    return (a - b).toFixed(2);
}

function multiply(a, b) {
    return (a * b).toFixed(2);
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero.";
    }
    return (a / b).toFixed(2);
}
