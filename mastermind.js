let  readline = require('readline-sync');
let secretWord = true;
let guess 
let win = false;

do{
    secretWord = readline.questionInt('The Secret Number is ...', {hideEchoBack: true});
} while (secretWord.toString().length !== 4);

do{
    do{
        guess = readline.questionInt("Guess :  ");
    } while( guess.toString().length !==4);

    let secretStr = secretWord.toString();
    let guessStr = guess.toString();

    let digitsGuessed = 0;
    let positionGuessed = 0;

    for( let digit = 0; digit < guessStr.length ; digit++){
        if(secretWord.includes(guessStr[digit])){
            digitsGuessed++;
            if(secretWord[digit] == guessStr[digit]){
                positionGuessed++;
            }
        }
    }

  if(positionGuessed == secretStr.length){
      win = true;
  } else{
        win = false;
  }
  console.log(' ${digitsGuessed} digits are guessed correctly, out of ${positionGuessed}')

} while (!win);