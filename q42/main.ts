// Q42 :Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
//   to see that the list has actually been modified.

let magicianName=["David Copperfield","Doug Henning","Penn & Teller","David Blaine","Lance Burton"];

function show_magician() {
    for (let i=0;i<magicianName.length;i++)
   console.log(magicianName[i])   
}

function make_great(){
    for (let i=0;i<magicianName.length;i++)
        console.log(`The Great ${magicianName[i]}`)   
     }


make_great()
show_magician()