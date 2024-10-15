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
