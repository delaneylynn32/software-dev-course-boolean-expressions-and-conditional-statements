const readline = require('readline-sync');
console.log("Welcome to the Adventure Game!");
const hasTorch = true;
const hasMap = false;
const hasSword = readline.question("Take the sword? (yes/no):").trim().toLowerCase() === 'yes';
const hasCompass = readline.question("Take the compass? (yes/no):").trim().toLowerCase() === 'yes';
console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
const pathChoice = readline.question("Do you go to the 'mountains' or the 'village'?");
console.log("DEBUG: Path Choice ->", pathChoice);
if (pathChoice === 'mountains') {
  console.log("The mountains are dark and trechourous");
  if (hasSword && hasCompass) {
    console.log("Armed and oriented you navigate the terrain and discover a hidden cave!");
  } else if (hasSword || hasCompass) {
    console.log("You manage to progress cautiously, but the journey is challenging.");
  } else if (hasTorch) {
    console.log("Your tourch provides light, but without a weapon or compass, you're vulnerable");
  } else {
    console.log("Without proper gear,the mountains prove too dangerous");
  }

} else if (pathChoice === 'village') {
    console.log("The village is lively, but full of unknown dangers");
  if (hasSword) {
   console.log("Armed with your sword, you help protect the villagers from bandits!");
    } else if (hasCompass) {
      console.log("Using your compass, you navigate through the village and gain useful knowledge");
    } else if (hasTorch) {
      console.log("Your torch helps you navigate at night, but without a map, you still get lost");
    } else {
      console.log("Without any equipment, you feel lost and vulnerable in the village");
    }

} else {
    console.log("Confused, you wander aimlessly");
}
    
