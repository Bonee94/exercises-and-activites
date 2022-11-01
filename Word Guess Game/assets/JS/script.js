var startinButton = document.querySelector("#start-button");
var timeEl = document.querySelector("#time-remaining");


var mainEl = document.getElementById("maintimer");

var secondsLeft = 10;

//starts game
startinButton.addEventListener("click", function(event){
    console.log('game started')
    gamebegins()
})

function gamebegins() {
    setTime();

}

function wordStart() {
    var availableWords = "Javascript"
}




function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
       sendMessage();
    }
 }, 1000);
}


function sendMessage() {
  timeEl.textContent = " tooslow";
  

}

