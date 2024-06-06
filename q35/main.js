"use strict";
// Q35 :Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//   • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//    • Add a line at the end of your program stating what these animals have in common. You could
//  print a sentence such as Any of these animals would make a great pet!
//list of three animals
let petAnimals = ["cat", "dog", "cow"];
//use for loop
for (let i = 0; i < petAnimals.length; i++) {
    console.log(petAnimals[i]);
    console.log(`${petAnimals[i]} would a great pet animal`);
}
console.log(`\nThis pet animal would a faithful animal .speacially a ${petAnimals[1]} is faithful pet animal.`);
