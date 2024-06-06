// Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let firstName="Anus";
let secondName="khan";
let num1 =2;
let num2 =5;

// • Tests for equality and inequality with strings.

console.log('equality and inequality test');
console.log (firstName.length === secondName.length);//true
console.log(firstName === secondName);//false

// • Tests using the lower case function

console.log('using lowercase function');
console.log(firstName.toLowerCase()==firstName) //false
console.log(secondName.toLowerCase()==secondName)//tue

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("numarical test")
console.log(num1===num2);//false
console.log(num1<num2);//true
console.log(num1>=num2);//false
console.log(num1<=num2);//true

// • Tests using "and" and "or" operators

console.log( 'Test for "and" and "or" operator');
console.log(num1 != num2 && firstName!==secondName);
console.log(num1> num2 && firstName.length ===secondName.length);
console.log(secondName.toLowerCase()==secondName ||num1>=num2);
console.log(num1===num2 || firstName === secondName );

// • Test whether an item is in a array
 let id=["sana","saba","sonia","hira"];
 console.log("check item is in array")
 console.log(id.includes("saba"));
 console.log(id.includes("huma"));

 // • Test whether an item is not in a array

console.log("check item is not in array");
console.log(!id.includes("hira"));
console.log(!id.includes("laiba"));
