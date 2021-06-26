// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let word = input.question("Let's play some scrabble! Enter a word: ");
  return word
};

function simpleScore(word){
  let simplePoints = 0;
  for (i=0; i <word.length; i++) {
    simplePoints += 1
  }
  return simplePoints;
}

function vowelBonusScore(word){
  let wordLowerCase = word.toLowerCase()
  let vowelPoints = 0
  for (i=0; i < word.length; i++){
    if (wordLowerCase[i] === "a" || wordLowerCase[i] === "e" || wordLowerCase[i] === "i" || wordLowerCase[i] === "o" || wordLowerCase[i] === "u" ) {
      vowelPoints += 3;
    } else {
      vowelPoints += 1;
    }
  }
 return vowelPoints
}

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
  let inputWord = initialPrompt();
  //console.log(oldScrabbleScorer(inputWord));
  //console.log(simpleScore(inputWord));
  console.log(vowelBonusScore(inputWord));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

