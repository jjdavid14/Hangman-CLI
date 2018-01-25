// Constructor
function Letter(character) {
	this.letter = character;
	this.guessed = false;
}

Letter.prototype.isLetter = function(guess) {
	this.guessed = (guess === this.letter);
};

Letter.prototype.getLetter = function() {
	if(this.guessed) {
		return this.letter;
	} else {
		return '_';
	}
}

module.exports =  Letter;