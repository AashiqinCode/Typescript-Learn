 export{} //To make this file treated as a module rather than a script,export{} is used.
let message='Hello world!';
console.log(message);

// let message="hek";->Two variables with the same name.

// Diff bb/w let and const
let x;
const y=20; //Const variables should be initialized and once assigned cannot be changed

// Datatypes
let isBeginner:boolean=true;

//This is known as template string-multiple lines with embedded expressions
let string1= `This is a message: ${message}
And values is ${isBeginner}`; 
console.log(string1);