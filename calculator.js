var readlineSync = require('readline-sync');
var cont = true;
while(cont){
var number = parseFloat(readlineSync.question("Please enter a number: "));

var number2 = parseFloat(readlineSync.question("Please enter another number: "));

var operator = readlineSync.question("Please enter a operator(+, -, *, /): ");

switch(operator){
case "+":
console.log("The sum of the two numbers is: " + (number + number2));
break;
case "-":
console.log("The sub of the two numbers is: " + (number - number2));
break;
case "/":
console.log("The div of the two numbers is: " + (number / number2));
break;
case "*":
console.log("The multi of the two numbers is: " + (number * number2));
break;
default:
console.log("Please enter a valid operator, thanks!");
}

if(x = readlineSync.keyInYN("Do you wanna keep calculating?")){
cont = true;
} else {
cont = false;
console.log("Encerrando a calculadora...");
}
}