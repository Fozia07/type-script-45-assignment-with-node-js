"use strict";
// Q43 :Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
//   to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicianName = ["David Copperfield", "Doug Henning", "Penn & Teller", "David Blaine", "Lance Burton"];
function show_magician() {
    for (let i = 0; i < magicianName.length; i++)
        console.log(magicianName[i]);
}
function make_great() {
    for (let i = 0; i < magicianName.length; i++)
        console.log(`The Great ${magicianName[i]}`);
}
//copy of the magician name array
let copy_magicianName = magicianName.slice();
console.log(copy_magicianName);
