var Word = require('./Word.js');
var inquirer = require('inquirer');
var lives;
var theWord;

function initialize() {
    lives =10;
    var wordOptions = ["ahoy", "landlubber", "booty", "buccaneer", "cutlass", "doubloons", "grog", "plunder", "rum",]
    var num = Math.floor((Math.random() * wordOptions.length));
    secretWord = wordOptions[num];
    theWord = new Word();
    theWord.populateArray(secretWord);
    theWord.wordString();
    prompt();
}
function prompt() {
    console.log('REMAINING GUESSES: ' + lives);
    inquirer
        .prompt([{
            type: "input",
            name: "guess",
            message: "GUESS A LETTER",
            validate: function (value) {
                if (value.length > 1) {
                    return false;
                } else {
                    return true;
                }
            }
        }])
        .then(function (answer) {
            theWord.guess(answer.guess);
            if (theWord.currentWord.toString("") === theWord.secretWord.toString("")) {
                console.log("You Guessed correctly\nNew word")
                initialize();
            } else {
                if (theWord.oldWord.toString("") === theWord.currentWord.toString("")) {
                    lives--;
                    if (lives === 0) {
                        console.log(`
~~~~~~~~~~~~~~~~~~GAME OVER~~~~~~~~~~~~~~~~~~~~~
`)
                    } else {
                        prompt();
                    }
                }else{
                    prompt();
                }
            }
        });
}

initialize();