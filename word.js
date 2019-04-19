var Letter = require("./letter.js");

function Word(array){
    this.array = array;
    this.test = [];
    this.gamePlay = function(){
        for (var i = 0; i < array.length; i++){
            var let = new Letter(array[i]);
            this.test.push(let);
        }
    }
    this.presentWord = function(){
        var display = [];
        for (var i = 0; i<this.test.length; i++){
            display.push(this.text[i].displayLet());
        }
        return display.join(" ");
    }
    this.check = function(userGuess){
        for (var i = 0; i < this.test.length; i++){
            this.test[i].check(userGuess);
        }
    }
}
module.exports = Word;