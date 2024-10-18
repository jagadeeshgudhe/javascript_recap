/*

//variables container that stores  value (variables names should be unique other wise it will through a error)

//declaration let x;
//assignment x=100;
/*
let x;
x=100;
console.log(x);


//NUMBERS
let age=25;
let price=10.99;
let gpa=2.1;
console.log(age);

console.log(`you are ${age} years old`);
console.log(`the price is $ ${price}`);
console.log(`your gpa is ${gpa}`);            */
/*

//STRINGSSS->series of characters

let firstname ="Jagadeesh";
let favouritefood="pizza";
let email = "jagadeesh8808@gmail.com";

console.log(typeof firstname);
console.log(firstname);
console.log(`my name is ${firstname}`);
console.log(`i like ${favouritefood}`);
console.log(`my email is ${email}`)   */

/*
//BOOLEANS -> euther true or false

let online=false;
let forSale=true;
let isStudent=true;
console.log(typeof online);
console.log(`im in online ${online}`);
console.log(`i want to sale my mobile ${forSale}`);
console.log(`enrolled ${isStudent}`);    */
/*

//Example:

let fullName='Jagadeesh Gudhe';
let age=25;
let student=false;
document.getElementById("p1").textContent=`your name is ${fullName}`;
document.getElementById("p2").textContent=`your are ${age} years old`;
document.getElementById("p3").textContent=`enrolled :${student}`    */

//Arithemetic operators 

//let students =31;

//students=students+1;
//students=students-1;
//students=students*1;
//students=students/2;
//students=students%3; 

//students+=1;
//students-=1;
//students*=2;
//students/=2;
//students%=2;

//students++;
//students--;
//console.log(students);

/*operator precedence order ->
1.parenthesis
2.exponents
3.multiplication, div,modullus
4.addition , subtraction             */


//let result=1+2*3+4**2;
//console.log(result);                



// How to accept user input
// 1, EASY WAY = window prompt ,
// 2. PROFESSIONAL WAY = HTML textbox 

//let username;
//username=window.prompt("what is your username?");
//console.log(username);

/*
let username;
document.getElementById("mySubmit").onclick = function(){
    username =document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`hello ${username}`
} */



// type conversion = change the datatype of a value to another (strings, numbers, booleans) 
/*
let x = "pizza";
let y = "pizza";
let z = "pizza";

X = Number(x);
y = String(y);
Z = Boolean(z);

console. log(x, typeof x)
console.log(y, typeof y);
console. log(z, typeof z);  */
/*
//constant - a variable that cant change the value

  

let pi = 3.141595;
let radius;
let circumference;
radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);
circumference = 2 * pi * radius;
console.log(circumference) ;  */
/*
// IF statement - Executes a block of code based on a condition.
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// Ternary Operator - A shorthand for if-else statements that is written in a single line.
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);



// Switches - Executes different actions based on different conditions.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


// String Methods - Methods for manipulating strings.
let text = "hello world";
console.log(text.toUpperCase());
console.log(text.replace("world", "JavaScript"));


// String Slicing - Extracts parts of a string using indices.
let text = "hello world";
console.log(text.substring(0, 5));
console.log(text.slice(-5));


// Method Chaining - Calls multiple methods on a single line.
let text = "   hello world   ";
let result = text.trim().toUpperCase().replace("HELLO", "HI");
console.log(result);




// Logical Operators - Combine conditions for complex logic.
let x = 5;
let y = 10;
if (x > 0 && y > 0) console.log("Both are positive");
if (x > 0 || y > 0) console.log("At least one is positive");
if (!(x < 0)) console.log("x is not negative");

---------------------------------------------------------------

// Strict Equality - Checks if values and their types are the same.
let a = 5;
let b = '5';
console.log(a === b); // false
console.log(a == b);  // true



// While Loops - Repeats a block of code while a condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// For Loops - Loops through a block of code a set number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}


--------------------------

// Functions - A block of code to be reused.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("jagadeesh"));


// Variable Scope - Determines where variables are accessible.
function scopeExample() {
    let localVar = "I'm local";
    console.log(localVar);
}
scopeExample();




