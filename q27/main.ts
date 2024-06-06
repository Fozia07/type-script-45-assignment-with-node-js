//Q27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//first version
// • If the alien is green
let alien_color="green";
if (alien_color==="green"){
    console.log('Congratulation!the player just earned 5 points ')
}
//second version
// • If the alien is yellow
 alien_color="yellow"
 if (alien_color==="green"){
    console.log('Congratulation!the player just earned 5 points ')
}
else if(alien_color==="yellow"){
    console.log('Congratulation!the player just earned 10 points ')
}

//third version
// • If the alien is red
 alien_color="red"
 if (alien_color==="green"){
    console.log('Congratulation!the player just earned 5 points ')
}
else if(alien_color==="yellow"){
    console.log('Congratulation!the player just earned 10 points ')}
else   (alien_color==="red");{
  console.log('Congratulation!the player just earned 15 points ')
}
