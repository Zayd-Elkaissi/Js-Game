var randomNum = Math.floor(Math.random() *101 );
var cp=1;
var ce = 10;
function guessNumber() {   
    
     console.log(randomNum);
    var guess;
    var message;
    cp++;
    ce--;
    guess = document.getElementById("input").value;
    message = document.getElementById("message");
    document.getElementById("cp").innerHTML="Number of attemps remaining :" + ce;
    if(cp <= 10 ){
           if (guess < randomNum) {
        message.innerHTML = "Your guess is too low";
      } else if (guess > randomNum){
          message.innerHTML = 'Your guess is too high';
      } else if (guess == randomNum && cp <= 2){
        message.innerHTML = 'Well done, you are a genius !!!';
        document.getElementById(input).style.display="none";}
       
        else if (guess == randomNum && cp > 2 ){                      
          message.innerHTML = 'You guessed it . You win !!! ';
        } else{ message.innerHTML = 'Errer !!'; 
      }
      
} else{
    message.innerHTML = 'You missed it !!';
    document.getElementById("Play").style.display="none";
}
 

}