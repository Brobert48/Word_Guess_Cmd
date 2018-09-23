var Letter = require('./Letter.js');

function Word(){
    this.secretWord =[];
    this.array =[];
    this.currentWord =[];
    this.oldWord =[];
    this.wordString = function(){
        var wordArray =[];
        this.oldWord = this.currentWord;
        this.currentWord =[];
        for(let i=0;i<this.array.length;i++){
           var letter = this.array[i].toString();
           wordArray.push(letter);
           this.currentWord.push(letter);
        }
        console.log(wordArray.join(' '))
    };
    this.populateArray = function(word){
        for(i=0;i<word.length;i++){
            var char = word.charAt(i);
            this.secretWord.push(char.toUpperCase());
            var character = new Letter (word.charAt(i));
            this.array.push(character);
        }
    }
    this.guess = function(userinput){
        for(var i=0; i<this.array.length;i++){
        this.array[i].doesItMatch(userinput);
        }
        this.wordString();
    };
}
module.exports = Word;

// var testWord = new Word();
// var testInput = process.argv.slice(2).join(' ');
// var userInput = 'o';
// testWord.populateArray(testInput);
// testWord.guess(userInput);
// testWord.wordString();

