//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let colour:string="orange";

//five test evalute true.
console.log('--->first condition<---');
console.log('Is colour is orange"?I predict true');
console.log(colour==="orange");


console.log('--->second condition<---');
console.log('Is colour colour is not blue?I predict true');
console.log(colour !=="blue");

console.log('--->third condition<---');
console.log('Is colour is in lower case? I predict true');
console.log(colour.toLowerCase()=="orange");

console.log('--->forth condition<---');
console.log('Is colour lengh is 6?I predict true');
console.log(colour.length==6);

console.log('--->fifth condition<---');
console.log('Is colour start with o?I predict true');
console.log(colour.startsWith('o'));

// five test evalute false

console.log('--->first condition<---');
console.log("Is colour is red ? I predict false");
console.log(colour==="red");

console.log('--->second condition<---');
console.log("Is colour is not orange ? I predict false");
console.log(colour!=="orange");

console.log('--->Third condition<---');
console.log("Is length is 4 ? I predict false");
console.log(colour.length==4);

console.log('--->forth condition<---');
console.log("Is colour end with letter d ? I predict false");
console.log(colour.endsWith('d'));

console.log('--->fifth condition<---');
console.log("Is colour is in uppercase ? I predict false");
console.log(colour.toUpperCase()=="orange");








