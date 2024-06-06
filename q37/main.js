"use strict";
// Q37 :Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', message = "I love typescript") {
    console.log(`size:${size} , message:${message}`);
    return;
}
//call function
make_shirt();
//for medium size the massage is default
make_shirt("medium");
//for any of the size the message and size is
make_shirt("smal", "Hello world");
