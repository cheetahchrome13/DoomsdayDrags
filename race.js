//race.js

//scripts for The Great Race
window.addEventListener("load", go);

//image array
var charImg = ["images/skully.gif", "images/greasy.gif", "images/scooter.gif",
  "images/goSkully.gif", "images/scooter.png", "images/greasy.png",
  "images/scooterWins.png", "images/greasyWins.png"]



//Character variables
//var greaser = document.getElementById("greaseball");
//var biker = document.getElementById("trash");
//var skully = document.getElementById("start");
//var victor = document.getElementById("winner");

function go() {
  scoot = 0;
  greasy = 0;
  document.getElementById("greaseball").style.display = "block";
  document.getElementById("trash").style.display = "block";
  document.getElementById("greaseball").style.left = "0em";
  document.getElementById("trash").style.left = "0em";
  document.getElementById("winner").style.display = "none";
  document.getElementById("start").src = "images/skully.gif";
  document.getElementById("trash").src = "images/scooter.gif";
  document.getElementById("greaseball").src = "images/greasy.gif";
  document.getElementById("start").addEventListener("click", timer, false);
}

//Timer for race, swaps skully gifs, swaps racer gifs w/pngs
var startTimer;
function timer() {
  startTimer = setInterval(race, 100);//300
  document.getElementById("start").src = "images/goSkully.gif";
  document.getElementById("trash").src = "images/scooter.png";
  document.getElementById("greaseball").src = "images/greasy.png";
}

//Race moves the monsters
var scoot = document.getElementById('trash').offsetLeft;
var greasy = document.getElementById('greaseball').offsetLeft;
function race() {
  var rand1 = Math.ceil(Math.random() * 7); //75 for px
  var rand2 = Math.ceil(Math.random() * 7); //75 for px
  if (scoot < 225) {//970 px
    scoot = scoot + rand1;
    document.getElementById("trash").style.left = scoot + "em";//px
  }
  if (greasy < 225) {//970 px
    greasy = greasy + rand2;
    document.getElementById("greaseball").style.left = greasy + "em"; //px
  }
  if (greasy > 0 || scoot > 0) {
    window.scrollBy(greasy + scoot + 10, 0);
  }
  if (scoot >= 215) {//****
    clearInterval(startTimer);
    scooterWins();
  }
  else if (greasy >= 215) {//****
    clearInterval(startTimer);
    greasyWins();
  }
}

//Scooter//****
function scooterWins() {

  //clearInterval(startTimer);
  document.getElementById("trash").style.display = "none";
  document.getElementById("greaseball").style.display = "none";
  document.getElementById("winner").style.display = "block";
  document.getElementById("winner").src = "images/scooterWins.png";
  document.getElementById("winner").addEventListener("click", go, false);
}

//Greasy//****
function greasyWins() {
  document.getElementById("trash").style.display = "none";
  document.getElementById("greaseball").style.display = "none";
  document.getElementById("winner").style.display = "block";
  document.getElementById("winner").src = "images/greasyWins.png";
  document.getElementById("winner").addEventListener("click", go, false);
}
