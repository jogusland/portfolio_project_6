let qwerty = document.getElementById("qwerty");
let phraseDiv = document.getElementById("phrase");
let btn_reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0; //remember, if the player guesses wrong 5 times, they lose the game
let phrases = [
  "We are One",
  "Whats up",
  "Who am I",
  "We like it",
  "We love it",
];

//start game listener
btn_reset.addEventListener("click", (e) => {
  overlay.style.display = "none";
});

//get a random phrase as array
function getRandomPhraseAsArray(array) {
  const randomNumber = Math.floor(Math.random() * array.length); //gets random number
  const phrase = array[randomNumber];
  const lettersArray = [];
  for (let i = 0; i < phrase.length; i++) {
    lettersArray.push(phrase[i]);
  }
  return lettersArray;
}

const array1 = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = array[i];
    ul.appendChild(li);
    if (array[i] !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
  }
}

addPhraseToDisplay(array1);

function checkLetter(buttonClicked) {
  const liLetter = document.getElementsByClassName("li");
  let match = null;
  for (let i = 0; i < buttonClicked.length; i++) {
    if (buttonClicked.textContent === allLi[i].textContent) {
      allLi[i].class = "show";
      match = buttonClicked.textContent;
    }
  }
  return match;
}
