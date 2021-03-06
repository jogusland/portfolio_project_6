let qwerty = document.getElementById("qwerty");
let phraseDiv = document.getElementById("phrase");
let btn_reset = document.getElementsByClassName("btn__reset")[0];
let tries = document.getElementsByClassName("tries");
let ol = tries.parentNode;
let missed = 0; //remember, if the player guesses wrong 5 times, they lose the game
let phrases = [
  "we are one",
  "whats up",
  "who am i",
  "we like it",
  "we love it",
];

//listen for the start game to be pressed
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

//The function loops over the letters and check if they match the letter in the button the player has chosen.
function checkLetter(buttonClicked) {
  const liLetterClass = document.getElementsByClassName("letter");
  let match = null;
  for (let i = 0; i < liLetterClass.length; i++) {
    if (buttonClicked.textContent === liLetterClass[i].textContent) {
      liLetterClass[i].classList.add("show");
      match = buttonClicked.textContent;
    }
  }
  return match;
}

//listen for keys to be pressed on the screen
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.className = "chosen";
    e.target.disabled = true;
    const letterFound = checkLetter(e.target);
    if (letterFound === null) {
      tries[0].remove();
      missed++;
    }
  }
  checkWin();
});

//check if the player wins
function checkWin() {
  let showClass = document.getElementsByClassName("show");
  let letterClass = document.getElementsByClassName("letter");
  let overlayId = document.getElementById("overlay");
  let title = document.querySelector(".title");
  if (showClass.length === letterClass.length) {
    overlayId.classList.add("win");
    title.textContent = "You won the Game!";
    overlayId.style.display = "flex";
  } else if (missed > 4) {
    overlayId.classList.add("lose");
    title.textContent = "You lost the Game!";
    overlayId.style.display = "flex";
  }
}
