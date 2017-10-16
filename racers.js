//racer.js

//scripts for Doomsday Drags

//images array
var grafix = ["images/skully.gif", "images/goSkully.gif", "images/scooter.gif",
"images/scooter.png", "images/scooterPwns.png", "images/greasy.gif",
"images/greasy.png", "images/greasyPwns.png", "images/nuke.gif",
"images/coffin.png", "images/trophy.png", "images/grave.png",
"images/crown.png", "images/scoreboard.png"];

//scorecard arrays
var greasyScore = [];
var scooterScore = [];

//global vars
var sWins = 0;//win count for scooter
var gWins = 0;//win count for greasy
var heat = 0;//race count

//troubleshooters
console.log ("heat is: " + heat);
console.log ("sWins is: " + sWins);
console.log ("gWins is: " + gWins);

//calls go() on load
window.addEventListener("load", go, false);

//clears cache after 13 heats
function reset() {
    location.reload();
}

//shows scoreboard
function showScore(){
  $("#skully, #scooter, #greasy").css("display", "none");
  $("#score")[0].src = grafix[13];
  $("#nuke")[0].src = grafix[8];
  $("#score, #nuke").css("display", "block");
  for (var i = 0; i < heat; i++){//"rolls out" score icon arrays
    $("#s" + i)[0].src = scooterScore[i];
    $("#g" + i)[0].src = greasyScore[i];
    $("#s" + i)[0].style.display = "block";
    $("#g" + i)[0].style.display = "block";
  }
  $("#score")[0].scrollIntoView({behavior: "smooth",});

  console.log ("heat is: " + heat);
  console.log ("sWins is: " + sWins);//troubleshooters
  console.log ("gWins is: " + gWins);

  if (heat < 13){
    $("#score")[0].addEventListener("click", go, false);
  }
  if (heat === 13) {
    $("#score")[0].addEventListener("click", reset, false);
  }
}

//sets up race
function go() {
  scoot = 0;
  grease = 0;
  for (var i = 0; i < heat; i++){//"rolls up" the score icon arrays
    $("#s" + i)[0].style.display = "none";
    $("#g" + i)[0].style.display = "none";
  }
  $("#winner, #nuke, #score").css("display", "none");
  $("#skully, #scooter, #greasy").css("display","block");//note
  $("#greasy, #scooter").css("left", "0em");
  $("#skully")[0].src = grafix[0];
  $("#scooter")[0].src = grafix[2];
  $("#greasy")[0].src = grafix[5];
  $("#scooter")[0].scrollIntoView({behavior: "smooth"});
  $('#skully')[0].addEventListener("click", timer, false);
}

//Timer for race, swaps skully gifs, swaps racer gifs w/pngs
var startTimer;
function timer() {
  startTimer = setInterval(race, 100);
  $("#skully")[0].src = grafix[1];
  $("#scooter")[0].src = grafix[3];
  $("#greasy")[0].src = grafix[6];
}

//Race moves the monsters
var scoot = $("#scooter")[0].offsetLeft;
var grease = $("#greasy")[0].offsetLeft;
function race() {
  var rand1 = Math.ceil(Math.random() * 7);
  var rand2 = Math.ceil(Math.random() * 7);
  if (scoot < 225) {
    scoot = scoot + rand1;
    $("#scooter")[0].style.left = scoot + "em";
  }
  if (grease < 225) {
    grease = grease + rand2;
    $("#greasy")[0].style.left = grease + "em";
  }
  if (grease > 0 || scoot > 0) {
    window.scrollBy((grease + scoot) / 1.5, 0);
  }
  if (scoot >= 225) {
    clearInterval(startTimer);
    scooterWins();
  }
  else if (grease >= 225) {
    clearInterval(startTimer);
    greasyWins();
  }
}

//Scooter wins
function scooterWins() {
  sWins += 1;
  heat += 1;
  if (heat < 13){
  scooterScore[heat - 1] = grafix[10];
  greasyScore[heat - 1] = grafix[9];
  }
  if (heat === 13) {
    scooterScore[heat - 1] = sWins > gWins ? grafix[12] : grafix[11];
    greasyScore[heat - 1] = gWins > sWins ? grafix[12] : grafix[11];
  }

  console.log ("scooterScore is:" + scooterScore);//troubleshooters
  console.log ("greasyScore is:" + greasyScore);

  $("#scooter, #greasy, #skully").css("display", "none");
  $("#winner")[0].src = grafix[4];
  $("#winner")[0].style.display = "block";
  $("#winner")[0].scrollIntoView({behavior: "smooth"});
  $("#winner")[0].addEventListener("click", showScore, false);
}

//Greasy wins
function greasyWins() {
  gWins += 1;
  heat += 1;
  if (heat < 13){
  scooterScore[heat - 1] = grafix[9];
  greasyScore[heat - 1] = grafix[10];
  }
  if (heat === 13){
    scooterScore[heat - 1] = sWins > gWins ? grafix[12] : grafix[11];
    greasyScore[heat - 1] = gWins > sWins ? grafix[12] : grafix[11];
  }

  console.log ("scooterScore is:" + scooterScore);//troubleshooters
  console.log ("greasyScore is:" + greasyScore);

  $("#scooter, #greasy, #skully").css("display", "none");
  $("#winner")[0].src = grafix[7];
  $("#winner")[0].style.display = "block";
  $("#winner")[0].scrollIntoView({behavior: "smooth"});
  $("#winner")[0].addEventListener("click", showScore, false);
}
