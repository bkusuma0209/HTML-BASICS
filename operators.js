//Arithmetic Operators
//Arithmetic operators are used to perform mathematical operations
let a=8;
let b=12;
console.log("Arithmetic Operatioins:");
console.log("a= ",a,"b= ",b);
console.log("Addition OPeratioins: ",a+b);
console.log("subtraction OPeratioins: ",a-b);
console.log("Multiplication OPeratioins: ",a*b);
console.log("divison OPeratioins: ",a/b);
console.log("Modulus OPeratioins: ",a%b);
console.log("Power OPeratioins: ",a**b);

//2.Assignment Operators
let x=10;
x += 5;
x -= 3;
x *= 4;
x /= 5;
x %= 6;
console.log("Assignment Operators:");
console.log("x after assignments:",x);
console.log("/n");

//3.Comparison operators:
let isEqual = ( a==b);
let isNotEqual = (a!=b);
let isStrictEqual = (a==b);
let isNotStrictEqual = (a!=b);
let isGreaterThan = (a>b);
let isLessThan = (a < b);
let isGreaterOrEqual = (a>=b);
let isLessThanOrEqual = (a<=b);
console.log("Comparision Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Strict Not Equal:", isNotStrictEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan)
console.log("Is Greater Or Equal:", isGreaterOrEqual);
console.log("Is Less Or Equal:", isLessThanOrEqual);

//4.Lodical Operators:
let andOperator = (a>0 && b>0);
let oroperator = (a>0 || b<0);
let notOperator = !(a<b);
console.log("Logical Operators:");
console.log("And Operator:", andOperator);
console.log("Or operator:", oroperator);
console.log("Not Operator:", notOperator);
console.log("\n");

//5.Bitwise operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftshift = a << 1;
let rightshift = a >> 1;
console.log("Bitwise Operators");
console.log("Bitwise And:", bitwiseAnd);
console.log("Bitwise Or:", bitwiseOr);
console.log("Bitwise Xor:", bitwiseXor);
console.log("Bitwise Not:", bitwiseNot);
console.log("Left Shift:", leftshift);
console.log("right shift:", rightshift);
console.log("/n");

//6.Ternary Operator:
let age = 25;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("/n")

//7.TypeOf Operator
let variableType = typeof a;
console.log("TypeOf Operator:");
console.log("Type of variable a:", variableType);
console.log("/n")