// Q41 :Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians().
//  which prints the name of each magician in the array.


let magicianName=["David Copperfield","Doug Henning","Penn & Teller","David Blaine","Lance Burton"];

function show_magician() {
    for (let i=0;i<magicianName.length;i++)
   console.log(magicianName[i])   
}
show_magician()