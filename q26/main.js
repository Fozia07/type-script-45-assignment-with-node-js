"use strict";
//Q26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = "green";
//• If the alien’s color is green
if (alien_color === "green") {
    console.log('Congratulation!the player just earned 5 points ');
}
// • If the alien’s color isn’t green
alien_color = "yellow";
if (alien_color === "green") {
    console.log('congratulation!you earned 5 points');
}
else if (alien_color === "yellow") {
    console.log('Congratulation!you earned 10 points');
}
else
    (alien_color === "red");
{
    console.log();
}
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color === "green") {
    console.log("try again");
}
else {
    console.log("you won");
}
