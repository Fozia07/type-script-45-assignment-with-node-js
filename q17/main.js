"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestList = ["hira", "sumaiya", "kiran", "hoorain", "hina", "sanam", "sadaf"];
//print message 
console.log("sorry to say that the dinner table is not avaible at dinner timeso tat I can invite only 2 frinds. ");
// remove one person
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest} i can't invite to you for dinner`);
}
//message for two person that was invite
guestList.forEach(guest => console.log(`hello ${guest} let you inform that you will still invite for dinner`));
//remove last two guest from list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
