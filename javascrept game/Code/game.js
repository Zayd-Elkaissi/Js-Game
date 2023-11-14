var randomNum = Math.floor(Math.random() *101 );
var cp=1;
var ce = 3;
function guessNumber() {   
    
    //  console.log(randomNum);
    
    var guess = document.getElementById("input").value;
    var message = document.getElementById("message");
    var PlayAgain = document.getElementById("PlayAgain");
    var cpElement = document.getElementById("cp");
    if (guess.trim() === "") {
      message.innerHTML = "Please enter a valid guess.";
      return; // Exit the function if the input is empty

  }else if(guess <= 0 || guess > 100) {
    document.getElementById("input").value = "";
    message.innerHTML = "Please chosen a Number between 1 and 100.";
    return;

  }
  cp++;
  ce--;
    cpElement.innerHTML = "Number of attempts remaining: " + ce;
    if(cp <= 3 ){
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
      

      // Clear the input field
    document.getElementById("input").value = "";
      
} else{
    message.innerHTML = 'You missed it !!';
    document.getElementById("Play").style.display="none";
    PlayAgain.innerHTML = "<button onclick='location.reload()' style = 'height: 30px'>Play Again</button>";
    PlayAgain.innerHTML.classList.add("PlayAgain")
}
 

}
