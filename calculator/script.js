// Function to clear the calculator display
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to append the clicked button value to the display
function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

// Function to evaluate the mathematical expression and display the result
function calculate() {
    try {
        // Get the expression from the display
        var expression = document.getElementById("result").value;

        // Evaluate the expression
        var result = eval(expression);

        // Display the result
        document.getElementById("result").value = result;
    } catch (error) {
        // Handle errors by displaying "Error" on the screen
        document.getElementById("result").value = "Error";
    }
}
