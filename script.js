//btns

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//dice img
const diceImg = document.querySelector(".dice");
diceImg.style.display = "none";

//variable
let currenntScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const switchPlayer = () => {
  currenntScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currenntScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";
    const random = Math.floor(Math.random() * 6 + 1);

    diceImg.src = `./dice-${random}.png`;

    if (random !== 1) {
      currenntScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currenntScore;
    } else {
      switchPlayer();
    }
  }
});

//hold score

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += currenntScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      switchPlayer();
    }
  }
});

//new game

btnNew.addEventListener("click", () => {
  currenntScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player-0").classList.remove("player--winner");
  document.querySelector(".player-1").classList.remove("player--winner");
  document.querySelector(".player-1").classList.remove("player--active");
  document.querySelector(".player-0").classList.add("player--active");
});
