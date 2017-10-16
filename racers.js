//race.js

//scripts for The Great Race

//image array
var grafix = ["images/skully.gif", "images/goSkully.gif", "images/scooter.gif",
"images/scooter.png", "images/scooterPwns.png", "images/greasy.gif",
"images/greasy.png", "images/greasyPwns.png", "images/nuke.gif",
"images/coffin.png", "images/trophy.png", "images/grave.png",
"images/crown.png", "images/scoreboard.png"];

//scorecard arrays
var greasyScore = [];
var scooterScore = [];

//global vars
//these are win counts to determine who gets the crown or headstone @ heat 13
var sWins = 0;
var gWins = 0;
// this is the race count
var heat = 0;

//troubleshooters
console.log ("heat is: " + heat);
console.log ("sWins is: " + sWins);
console.log ("gWins is: " + gWins);

//used to call showScore
window.addEventListener("load", go, false);//setUp
function reset() {
    location.reload();
}
// function setUp(){
//   go();
// }

//shows scoreboard
function showScore(){
  $("#start, #trash, #greaseball").css("display", "none");
  $("#scoreboard")[0].src = grafix[13];
  $("#scoreboard")[0].style.display = "block";
  $("#nuke")[0].src = grafix[8];
  $("#nuke")[0].style.display = "block";

  for (var i = 0; i < heat; i++){//print out score arrays
    // $("#s" + heat)[0].src = scooterScore[i];
    document.getElementById("s" + i).src = scooterScore[i];
    document.getElementById("g" + i).src = greasyScore[i];
    // $("#g" + heat)[0].src = greasyScore[i];
    // $("#s" + heat).css("display", "block");
    document.getElementById("s" + i).style.display = "block";
    document.getElementById("g" + i).style.display = "block";
    // $("#g" + heat).css("display", "block");
  }
  $("#scoreboard")[0].scrollIntoView({behavior: "smooth",});


  //troubleshooters
  console.log ("heat is: " + heat);
  console.log ("sWins is: " + sWins);
  console.log ("gWins is: " + gWins);

  if (heat < 13){
    $("#scoreboard")[0].addEventListener("click", go, false);
  }
  if (heat === 13) {
    $("#scoreboard")[0].addEventListener("click", reset, false);
  }
}

//sets up race
function go() {
  scoot = 0;
  greasy = 0;
  // Gonna need some arrays to hide icons here
  for (var i = 0; i < heat; i++){//hide score arrays
    document.getElementById("s" + i).style.display = "none";
    document.getElementById("g" + i).style.display = "none";
    // $("#s" + heat)[0].src = grafix[i];
    // $("#g" + heat)[0].src = grafix[i];
    // $("#s" + heat).css("display", "none");
    // $("#g" + heat).css("display", "none");
  }
  $("#winner, #nuke, #scoreboard").css("display", "none");
  $("#start, #trash, #greaseball").css("display","block");//note
  $("#greaseball, #trash").css("left", "0em");
  $("#start")[0].src = grafix[0];
  $("#trash")[0].src = grafix[2];
  $("#greaseball")[0].src = grafix[5];
  $("#trash")[0].scrollIntoView({behavior: "smooth"});
  $('#start')[0].addEventListener("click", timer, false);
}

//Timer for race, swaps skully gifs, swaps racer gifs w/pngs
var startTimer;
function timer() {
  startTimer = setInterval(race, 100);//300
  $("#start")[0].src = grafix[1];
  $("#trash")[0].src = grafix[3];
  $("#greaseball")[0].src = grafix[6];
}

//Race moves the monsters
var scoot = $("#trash")[0].offsetLeft;//note
var greasy = $("#greaseball")[0].offsetLeft;
function race() {
  var rand1 = Math.ceil(Math.random() * 7); //75 for px
  var rand2 = Math.ceil(Math.random() * 7); //75 for px
  if (scoot < 225) {//970 px
    scoot = scoot + rand1;
    $("#trash")[0].style.left = scoot + "em";//px
  }
  if (greasy < 225) {//970 px
    greasy = greasy + rand2;
    $("#greaseball")[0].style.left = greasy + "em"; //px
  }
  if (greasy > 0 || scoot > 0) {
    window.scrollBy(200, 0);
  }
  if (scoot >= 225) {//****
    clearInterval(startTimer);
    scooterWins();
  }
  else if (greasy >= 225) {//****
    clearInterval(startTimer);
    greasyWins();
  }
}

//Scooter//
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

  //troubleshooters
  console.log ("scooterScore is:" + scooterScore);
  console.log ("greasyScore is:" + greasyScore);

  $("#trash, #greaseball, #start").css("display", "none");
  $("#winner")[0].src = grafix[4];
  $("#winner")[0].style.display = "block";
  $("#winner")[0].scrollIntoView({behavior: "smooth"});
  $("#winner")[0].addEventListener("click", showScore, false);
}

//Greasy//
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

  //troubleshooters
  console.log ("scooterScore is:" + scooterScore);
  console.log ("greasyScore is:" + greasyScore);

  $("#trash, #greaseball, #start").css("display", "none");
  $("#winner")[0].src = grafix[7];
  $("#winner")[0].style.display = "block";
  $("#winner")[0].scrollIntoView({behavior: "smooth"});
  $("#winner")[0].addEventListener("click", showScore, false);
}

////these are scraps from css positioning process
////scooter
// $("#s0")[0].src = grafix[9];//*****
// $("#s1")[0].src = grafix[9];//*****
// $("#s2")[0].src = grafix[10];//*****
// $("#s3")[0].src = grafix[9];//*****
// $("#s4")[0].src = grafix[10];//*****
// $("#s5")[0].src = grafix[10];//*****
// $("#s6")[0].src = grafix[9];//*****
// $("#s7")[0].src = grafix[10];//*****
// $("#s8")[0].src = grafix[10];//*****
// $("#s9")[0].src = grafix[9];//*****
// $("#s10")[0].src = grafix[9];//*****
// $("#s11")[0].src = grafix[10];//*****
// $("#s12")[0].src = grafix[12];//*****
// //greasy
// $("#g0")[0].src = grafix[10];//*****
// $("#g1")[0].src = grafix[10];//*****
// $("#g2")[0].src = grafix[9];//*****
// $("#g3")[0].src = grafix[10];//*****
// $("#g4")[0].src = grafix[9];//*****
// $("#g5")[0].src = grafix[9];//*****
// $("#g6")[0].src = grafix[10];//*****
// $("#g7")[0].src = grafix[9];//*****
// $("#g8")[0].src = grafix[9];//*****
// $("#g9")[0].src = grafix[10];//*****
// $("#g10")[0].src = grafix[10];//*****
// $("#g11")[0].src = grafix[9];//*****
// $("#g12")[0].src = grafix[11];//*****
//
// $("#s0, #s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8, #s9, #s10, #s11")
// .css("display", "block");//*****
// $("#g0, #g1, #g2, #g3, #g4, #g5, #g6, #g7, #g8, #g9, #g10, #g11")
// .css("display", "block");//*****
