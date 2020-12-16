// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userChoice = ""
let computerChoice;
let randomNumber;
let winner = ""


$("#shoot").click(function(){
  userChoice = $("#input").val();
  console.log("hello jerry")
  $("#userChoice").html(userChoice);
  randomNumber = Math.random();
  
  console.log(randomNumber);
  
  if (randomNumber > 0.66666) {
    $("#computerChoice").html("paper");
    computerChoice = "paper";
    
    } else if (randomNumber > 0.33333) {
      $("#computerChoice").html("rock");
      computerChoice = "rock";
      
    } else {
      $("#computerChoice").html("scissors");
      computerChoice = "scissors";
    }
    
    });

