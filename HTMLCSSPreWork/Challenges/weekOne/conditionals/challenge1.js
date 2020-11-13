//   ******Relational Operators******

// Greater Than >
// Less than <
// Less than or equal to <=
// Greater than or equal to >=


//   ******Logical Operators******

// AND: && 
// OR: ||


//   ******Logical Operators******
// Equal: ==
// Not equal: !=

// ** Strict  **
// Equal: ===
// Not Equal: !==



let age = 15;

if (age>=21){
    console.log('Yes can purchase');
} else {
    console.log('Can not purchase');
}

let myName = 'Nick';
let friendsName = 'Tyler';

console.log(`${myName}'s name is ${myName.length} characters long`);

console.log(`${friendsName}'s name is ${friendsName.length} characters long`);

if (myName.length > friendsName.length) {
    console.log("My name is longer than Tyler's");
}else {
    console.log("Tyler's name is longer than mine");
}

console.log(friendsName + " has the longer name by " + (friendsName.length - myName.length)  + " character(s)")

//****Instructor Code*****
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
​
​ */
// const myName = "Rob";
// const friendName = "Josh";
// console.log(myName.length);
// console.log(friendName.length);
/* SILVER
​
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
​ */
// const myName = "Rob";
// const friendName = "Josh";
// let sentence;
// if (myName.length > friendName.length) {
//   sentence = "My name is longer than " + friendName;
//   console.log(sentence);
// } else {
//   sentence = `${friendName}'s name is longer than ${myName}`;
//   console.log(sentence);
// }
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional! */
const myName = "Robs";
const friendName = "Josh";
let sentence;
if (myName.length > friendName.length) {
  sentence = "My name is longer than " + friendName;
  console.log(sentence);
} else if (myName.length == friendName.length) {
  const differenceInLetters = friendName.length - myName.length;
  sentence = `${friendName}'s name is equal to ${myName}.  ${differenceInLetters} letters are different`;
  console.log(sentence);
} else {
  // const differenceInLetters = myName.length - friendName.length;
  const differenceInLetters = friendName.length - myName.length;
  sentence = `${friendName}'s name is longer than ${myName} by ${differenceInLetters} letters`;
  console.log(sentence);
}



