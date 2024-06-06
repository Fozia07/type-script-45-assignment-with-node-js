"use strict";
/*Q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList = ["sumaya", "kiran", "hina", "sanam"];
let message = "I would like to invite you for a dinner please join us at my home";
// this guest is not come  
let guestnotcome = guestList[0];
//print message for guest who not come
console.log(`${guestnotcome} will not come for dinner`);
//add new guest in guestlist
guestList.splice(0, 1, "sadaf");
guestList.forEach(guest => console.log(`Hello ${guest} i would like to invite you for dinner at my home`));
