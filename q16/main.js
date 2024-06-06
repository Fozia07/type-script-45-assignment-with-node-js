"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestList = ["sumaya", "kiran", "hina", "sanam"];
//inform to friend for bigger dinner table
console.log("hello friends, I would like to inform you that i found a bigger dinner table .");
//add one guest beginning of list
guestList.unshift("hira");
//add one new guest end of the list
guestList.push("sobia");
//add one guest middle of the list
let middle = Math.floor(guestList.length / 2);
guestList.splice(middle, 0, "hoorain");
console.log(guestList);
guestList.forEach(invite => console.log(`Hello ${invite}, I would like to invite you for dinner at my home.`));
