var inquirer = require("inquirer");

var Word = require('./Word.js');

// Initialize word list
var wordList = [
"Maltese",
"Boxer",
"Corgi",
"Papillon",
"Pomeranian",
"Siberian Husky",
"Bull Dog",
"German Shepherd"
];

// Select a word at random
var wordToGuess = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
var currentWord = new Word(wordToGuess);
var guessRemaining = 9;

// This function starts a new new game by initializing to new values
var newGame = function() {
	wordToGuess = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
  	currentWord = new Word(wordToGuess);
	guessRemaining = 9;
}

// Prompts the user for a guess
var promptUser = function() {
	
	inquirer.prompt([
	  {
	    name: "userGuess",
	    message: "Guess a letter: "
	  }
	]).then(function(response) {
	  if(currentWord.guess(response.userGuess.toUpperCase()) > 0) {
	  	console.log("CORRECT!!!");
	  	console.log(currentWord.getWord());
	  } else {
	  	console.log("INCORRECT!!!");
	  	guessRemaining--;
	  	console.log(guessRemaining + " guesses remaining!");
	  }
	  // Check if all letters guessed
	  if(currentWord.isGuessed()) {
	  	console.log("You got it right! Next word.\n");
	  	newGame();
	  }

	  // Check if user lost
	  if(guessRemaining === 0) {
	  	console.log("You lost! Next word.\n");
	  	newGame();
	  }

	  promptUser();
	});
}

// Starts the first prompt which starts the game
promptUser();