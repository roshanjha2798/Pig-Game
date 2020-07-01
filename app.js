var score , roundScore, activePlayer , gamePlaying;
init();
document.querySelector(".btn-roll").addEventListener("click", function(){
  if(gamePlaying){
    var  dice = Math.floor(Math.random()*6)+1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
  
    if(dice!== 1){
        //add score
        roundScore += dice;
        document.querySelector("#current-"+ activePlayer).textContent = roundScore;
    }
    else{
    //next player turn
   nextPlayer();
  
    }
  }

});

document.querySelector(".btn-hold").addEventListener("click",function(){
  //add current score to the global score
  if(gamePlaying){
    score[activePlayer] += roundScore;

  //displaying it on UI 
  document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];

  //check if player won the game
  if(score[activePlayer] >= 10){
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    gamePlaying = false;
  }
  else{
    //next player 
  nextPlayer();
  }
  }
 

});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click",init);
function init(){
  score = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector(".dice").style.display= "none";
document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";
document.querySelector("#name-0").textContent = "Player-1";
document.querySelector("#name-1").textContent = "Player-2";
document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

}

