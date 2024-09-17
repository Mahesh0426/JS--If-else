let output = document.getElementById("output");
let output2 = document.getElementById("output2");

//IF statement
const weekend = false;
if (weekend) {
  output.textContent = "come to the class";
}
if (!weekend) {
  output.textContent = "donot come to the class";
}

// IF ELSE statement
// find if a number is odd or even
const num = 5;
if (num % 2 === 0) {
  output.textContent = "it is even number";
} else {
  output.textContent = "it is odd number";
}

//  IF ELSE_IF statement
// implement grading application usig if else
const grade = 70;
if (grade >= 90) {
  output.textContent = "Brilliant, A+ grade";
} else if (grade >= 80) {
  output.textContent = "Excellent, A grade";
} else if (grade >= 70) {
  output.textContent = "Good, B+";
} else {
  //default cse
  output.textContent = "fail";
}

//build a pricing catalogue for these item :monitor, mouse,keyboard,CPU,printer
const item = "mouse";

if (item == "Monitor") output.textContent = "the priice of monitor is 200";
else if (item == "mouse") {
  output.textContent = "the priice of mouse is 200";
} else if (item == "keyboard") {
  output.textContent = "the priice of keybouad is 50 ";
} else if (item == " CPU") {
  output.textContent = "the priice of CPU is 300";
}

//switch-case
//  syntax: switch(var to test){
//     case condition:
//      ; break; }

const item1 = "mouse";
switch (item1) {
  case "monitor":
    output.textContent = "monitor : 500";
    break;
  case "mouse":
    output.textContent = "mouse : 300";
    break;
  case "keyboard":
    output.textContent = "keyboard : 100";
    break;
  case "default":
    output.textContent = "no value";
}

// TERNARY OPERATOR
// (2===2)?"true":"false"
4 % 2 === 0 ? (output.textContent = "true") : (output.textContent = "fale");

//NESTED IF CONDITION
const isRaining = true;
const isWindy = false;
if (isRaining) {
  output.textContent = "it is raining";
  if (isWindy) {
    output2.textContent = "it is  Windy";
  } else {
    output2.textContent = "it is not  Windy";
  }
} else {
  output.textContent = "it is  not raining";
}
