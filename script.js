const calculation = prompt("Which mathematical operation would you like to do?");
const firstNumber = +prompt("Enter your first number");
const secondNumber = +prompt("Enter your second number");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert(`You didn't enter a number`);
}
else if (calculation === 'add') {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
}
else if (calculation === 'sub') {
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
}
else if (calculation === 'mult') {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
}
else if (calculation === 'div') {
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}
else {
    alert(`Error! I can't calculate this operation:(`);
}