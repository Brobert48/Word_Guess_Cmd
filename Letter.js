function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.toString = function(){
        if(this.guessed){
            var letterOutput = `${this.character}`
        }else{
            var letterOutput = ` *`
        }
        return letterOutput.toUpperCase();

    };
    this.doesItMatch = function(userInput){
        if(userInput === this.character || this.character === " "){
            this.guessed = true;
        }
    };
}

module.exports = Letter;

// var character = process.argv[2];
// var userInput = process.argv[3];

// var testLetter = new Letter(character);
// console.log(testLetter);
// testLetter.toString();
// testLetter.doesItMatch();
// console.log(testLetter);
// testLetter.toString();
