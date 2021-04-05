let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let btn_reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0; //remember, if the player guesses wrong 5 times, they lose the game
let array = ["We are One", "Whats up", "Who am I", "We like it", "We love it"];
btn_reset.addEventListener("click", (e) => {
  overlay.style.display = "none";
});
