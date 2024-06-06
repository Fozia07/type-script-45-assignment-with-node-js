"use strict";
// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "mango", "banana"];
if (favorite_fruits.includes("apple")) {
    console.log("I really like apple");
}
if (favorite_fruits.includes("mango")) {
    console.log('I really like Mango');
}
if (favorite_fruits.includes("banana")) {
    console.log('I really like Banana');
}
if (favorite_fruits.includes("papaya")) {
    console.log("I don't like papaya");
}
if (favorite_fruits.includes("peach")) {
    console.log("I don't like peach");
}
