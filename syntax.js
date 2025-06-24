// syntax in javascript
//Let, Const, Var are used to declare variables in javascript
let a=10;
//let is block scoped, cannot be redeclared in the same scope

const b=20;
//const is block scoped and cannot be reassigned

var c=30;
// var is funtion scoped, can be redeclared in the same scope
console.log(a,b,c)
// console.log will output the values of a,b, and c
// Output: 10 20 30

// datatypes in javascript
// data types in javascript include:
// 1. Primitive Types:
// -Number: Represents both integer and floating point numbers.
// -String: Represents a sequence of characters enclosed in single or double quotes.
// -Boolean: Represents logical entity and can have two values: True or False
// -Null: Represents the intentional absence of any object value.
// -undefined: A variable that has been declared but has not been assigned a value yet.
// -symbol: A unique and immutable primitive value, often used as object property key.
// -Bigint: Represents integers with arbitary precision,useful for large integers.

//2.Non-primitive Types:
// -object: A collection of properties, where each property is a key-value pair.
// -Array: A special type of object used to stored ordered collection of values.
// -Function: A callable object that can be invoked to perform a specific task.

// Primitive data types:
let number = 42; //Number
let String = "Hello World"; //String
let Boolean = true; // boolean
let undefinedvar; // undefined //(not assigned a value)
let nullVar = null; //null
let symbolVar = Symbol("unique"); // symbol //(unique identifier) //(often used as object property keys)
let Bigint = BigInt(1234567789012345678901234567890) // used for large integers

// Non Primitive data types:
let objectVar = { key: "value"}; 
let arrayVar = [1, 2, 3, 4, 5];
let FunctionVar = function() { return "I am a function"};


let object2={
    // adding multiple key-value pairs
     name:"John Doe",
     age:30,
     isEmployed: true,
     hobbies: [["reading", "gaming","coding"]]
}

console.log("Data Types in JavaScript:");
console.log("Number:", number);
console.log("String:", String);
console.log("Boolean:", Boolean);
console.log("Undefined:", undefinedvar);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("Bigint:", Bigint);
console.log("object:", objectVar);
console.log("array:", arrayVar);
console.log("Function:",FunctionVar);
console.log("object2:", object2);