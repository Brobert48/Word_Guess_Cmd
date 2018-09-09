var Letter = require('./Letter.js');

function Word(){
    this.array =[];
    this.wordString = function(){
        var wordArray =[];
        for(i=0;i<this.array.length;i++){
           var letter = this.array[i].toString();
           wordArray.push(letter);
        }
        console.log(wordArray.join(' '))
    };
    this.populateArray = function(word){
        for(i=0;i<word.length;i++){
            var character = new Letter (word.charAt(i));
            this.array.push(character);
        }
    }
    this.guess = function(userinput){
        for(var i=0; i<this.array.length;i++){
        this.array[i].doesItMatch(userinput);
        }
    };
}

var testWord = new Word();
var testInput = process.argv.slice(2).join(' ');
var userInput = 'o';
testWord.populateArray(testInput);
testWord.guess(userInput);
testWord.wordString();

