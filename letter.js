var userInput = process.argv[3]

function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.displayInput = function(){
        if (this.letter === " "){
            return
        }
        else if (!this.guessed){
            return "_";
        }
        else {
            return this.letter;
        }
    }
    this.review = function(userInput){
        if(userInput === this.letter){
            this.guessed = true;
        }
    }
}
module.exports = Letter;