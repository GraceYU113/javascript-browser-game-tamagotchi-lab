/*-------------------------------- Constants --------------------------------*/
const MAX_STAT = 10
const INTERVAL_MS = 3000


/*---------------------------- Variables (state) ----------------------------*/
let hunger = 0
let boredom = 0
let sleepiness = 0
let gameInterval = null
let isGameOver = false


/*------------------------ Cached Element References ------------------------*/
const hungerStat = document.getElementById("hunger-stat")
const boredomStat = document.getElementById("boredom-stat")
const sleepinessStat = document.getElementById("sleepiness-stat")

const playBtn = document.getElementById("play")
const feedBtn = document.getElementById("feed")
const sleepBtn = document.getElementById("sleep")
const restartBtn = document.getElementById("restart")

const messageEl = document.getElementById("message")


/*-------------------------------- Functions --------------------------------*/
function updateUI() {
  hungerStat.textContent = hunger
  boredomStat.textContent = boredom
  sleepinessStat.textContent = sleepiness
}

function incrementStats() {
  hunger += Math.floor(Math.random() * 3) // 0~2
  boredom += Math.floor(Math.random() * 3)
  sleepiness += Math.floor(Math.random() * 3)

  updateUI()
  checkGameOver()
}

function checkGameOver() {
  if (hunger >= MAX_STAT || boredom >= MAX_STAT || sleepiness >= MAX_STAT) {
    clearInterval(gameInterval)
    isGameOver = true
    messageEl.classList.remove("hidden")
    restartBtn.classList.remove("hidden")
  }
}

function resetGame() {
  hunger = 0
  boredom = 0
  sleepiness = 0
  isGameOver = false
  messageEl.classList.add("hidden")
  restartBtn.classList.add("hidden")
  updateUI()
  gameInterval = setInterval(incrementStats, INTERVAL_MS)
}


/*----------------------------- Event Listeners -----------------------------*/
playBtn.addEventListener("click", () => {
  if (!isGameOver) {
    boredom = 0
    updateUI()
  }
})

feedBtn.addEventListener("click", () => {
  if (!isGameOver) {
    hunger = 0
    updateUI()
  }
})

sleepBtn.addEventListener("click", () => {
  if (!isGameOver) {
    sleepiness = 0
    updateUI()
  }
})

restartBtn.addEventListener("click", resetGame)

updateUI()
gameInterval = setInterval(incrementStats, INTERVAL_MS) //init//

