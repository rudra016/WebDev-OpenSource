let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let awaitingPi = false;

function SquarRoot() {
    const operand = parseFloat(screenValue.replace('√', ''));
    if (isNaN(operand)) {
        throw new Error('');
    }
    const result = Math.sqrt(operand);
    screen.value = result.toString();
}

function Percentage() {
    const percentageValue = parseFloat(screenValue.slice(0, -1));
    if (!isNaN(percentageValue)) {
        const result = parseFloat(percentageValue / 100);
        screen.value = result;
    }
    else {
        throw new Error('');
    }
}

function Power() {
    // Split the expression at the "^" symbol
    const [base, exponent] = screenValue.split('^').map(parseFloat);
    if (!isNaN(base) && !isNaN(exponent)) {
        const result = Math.pow(base, exponent);
        screen.value = result.toString();
    } else {
        throw new Error('Invalid input');
    }
}


for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;

        }
        else if (buttonText == '=') {

            try {
                // Handling Root Error 
                if (screenValue.includes('√')) {
                    SquarRoot();
                }
                else if (screenValue.endsWith('%')) { // Change to "else if"
                    Percentage();
                }
                else if (screenValue.includes('^')) {
                    Power();
                }
                else {
                    screen.value = eval(screenValue);
                }
            }
            catch (error) {
                screen.value = error;
            }

        }
        // Adding Square root Functionality
        else if (buttonText == '&radic;') {
            screenValue += '√';
            screen.value = screenValue;
        }

        // Adding Percentage Feature  
        else if (buttonText == '%') {
            // Check if the output window is blank 
            if (screenValue === '') {
                screenValue = '0%';
                screen.value = screenValue;
            }
            else { 
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
        // Adding Power Functionality - It show Symbol in the Screen 
        else if (buttonText == '^') {
            screenValue += '^';
            screen.value = screenValue;
        }
        // Adding Delete Functionality
        else if(e.target.innerHTML == 'DEL'){
            screenValue = screenValue.substring(0, screenValue.length-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
    

}


