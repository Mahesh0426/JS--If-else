#### what in conditional statement in programming?

Ans:In programming, a conditional statement is a control structure that allows you to execute certain code blocks based on whether a specified condition evaluates to true or false.The most common conditional statement is the "if statement", which typically takes the following form:
if (condition) {
// code to execute if the condition is true
}

#### what is control ststement in programming?

Ans:In programming, a control statement is a way to control the flow of your code. It lets you decide which parts of your program should run and when they should run based on certain conditions.

#### can you talk about different condional statement in JS?

Ans: There are several conditional statements that you can use to control the flow of your code:

1. if statement: The basic conditional statement in JavaScript. It executes a block of code if a specified condition is true.

if (condition) {
// code to execute if the condition is true
} 2. if...else statement: This allows you to execute one block of code if the condition is true and another block of code if the condition is false.

if (condition) {
// code to execute if the condition is true
} else {
// code to execute if the condition is false
}

3. else if statement: You can use this statement to test multiple conditions. If the first condition is false, it moves to the next condition and so on.

if (condition1) {
// code to execute if condition1 is true
} else if (condition2) {
// code to execute if condition2 is true
} else {
// code to execute if none of the conditions are true
} 4. switch statement: This provides a way to execute different code blocks based on the value of a variable or expression.

switch (expression) {
case value1:
// code to execute if expression equals value1
break;
case value2:
// code to execute if expression equals value2
break;
default:
// code to execute if expression doesn't match any case
}

#### explain the difference beth if and if else?

Ans:The "if" statement and the "if...else" statement are both fundamental conditional statements in programming, but they serve different purposes:

1. if statement:
   Syntax:
   if (condition) {
   // code to execute if the condition is true
   }
   **Use:** The "if" statement is used to execute a block of code only if a specified condition is true. If the condition evaluates to false, the code inside the block will not be executed at all.
   **Example:**
   if (temperature > 30) {
   console.log("It's hot outside!");
   }

2. if...else statement:
   Syntax:
   if (condition) {
   // code to execute if the condition is true
   } else {
   // code to execute if the condition is false
   }
   **Use:** The "if...else" statement allows you to execute one block of code if the condition is true and another block of code if the condition is false. It provides an alternative action to be performed when the condition evaluates to false.
   **Example:**
   if (temperature > 30) {
   console.log("It's hot outside!");
   } else {
   console.log("It's not too hot outside.");
   }

#### how does the order of elseif statement affect the execution of code?

Ans: The order of elseif statements in code can affect which condition gets checked first and ultimately which block of code gets executed.the interpreter starts checking conditions from the top of the if...else if...else structure and stops as soon as it finds a condition that evaluates to true and skips rest of conditions . If none of the conditions are true, then the code inside the else block is executed.

#### define switch case?

Ans:the switch statement is a control flow statement that allows you to compare a value against multiple cases and execute different code blocks based on the matching case.

#### what are the advantages of switch case over if else if?

ans: the advantages of switch case over if else if are readability and maintainability, efficiency,easier to update, default case handling.

#### can you tell about fall through problem in switch case? how to preventy it? why use break?

Ans: The "fall through" problem in switch case statements refers to the behavior where, if a case block doesn't end with a break statement, the execution will continue to the next case block regardless of whether its condition is true. This can lead to unintended behavior and bugs in your code.
To prevent the fall through problem you should include a break statement at the end of each case block.
Because break statement tells JavaScript to exit the switch statement and skip the remaining case blocks.

#### what is nesting condition?

Ans: Nesting conditions, in programming is when you put one condition inside another condition.
for eg:
if (x > 0) {
if (y > 0) {
console.log("Both x and y are positive.");
} else {
console.log("x is positive, but y is not.");
}
} else {
console.log("x is not positive.");
}

#### what is ternary operator?

Ans: It is a concise way to write conditional expressions in JavaScript. It's often used as a shorthand for simple if-else statements.
syntax:
(condition) ? expression1 : expression2

how it works:
If the condition evaluates to true, expression1 is executed.
If the condition evaluates to false, expression2 is executed.

for eg:
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(message); // Output: "You are an adult"
