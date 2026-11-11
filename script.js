let display = document.getElementById("display");

let buttons = document.querySelectorAll(".button button");

let firstNumber = "";
let operator = "";
let secondNumber = "";

// Adding click event to all buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        // Clear display
        if (value === "AC") {
            display.value = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }

        // Delete last character
        else if (value === "Delete") {
            display.value = display.value.slice(0, -1);
        }

        // Percentage
        else if (value === "%") {
            if (display.value !== "") {
                display.value = Number(display.value) / 100;
            }
        }

        // Calculate result
        else if (value === "=") {

            if (firstNumber !== "" && operator !== "" && display.value !== "") {

                secondNumber = display.value;

                let num1 = Number(firstNumber);
                let num2 = Number(secondNumber);
                let result;

                if (operator === "+") {
                    result = num1 + num2;
                }

                else if (operator === "-") {
                    result = num1 - num2;
                }

                else if (operator === "*") {
                    result = num1 * num2;
                }

                else if (operator === "/") {
                    if (num2 === 0) {
                        display.value = "Cannot divide by zero";
                        firstNumber = "";
                        secondNumber = "";
                        operator = "";
                        return;
                    }

                    result = num1 / num2;
                }

                display.value = result;

                firstNumber = "";
                secondNumber = "";
                operator = "";
            }
        }

        // Select operator
        else if (value === "+" || value === "-" || value === "*" || value === "/") {

            if (display.value !== "") {
                firstNumber = display.value;
                operator = value;
                display.value = "";
            }
        }

        // Enter numbers and decimal
        else {

            if (value === "." && display.value.includes(".")) {
                return;
            }

            display.value = display.value + value;
        }

    });

});