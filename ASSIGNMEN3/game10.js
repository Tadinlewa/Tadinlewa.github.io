const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let jumpingInterval = 2000;
let bugX, bugY;
let gameLoopId;

function resetGame() {
  score = 0;
  jumpingInterval = 2000;
  bugX = Math.random() * canvas.width;
  bugY = Math.random() * canvas.height;
  clearInterval(gameLoopId);
  gameLoopId = setInterval(gameLoop, jumpingInterval);
  updateScoreDisplay();
}

function updateScoreDisplay() {
  document.getElementById("score").textContent = score;
}

function updateFrameRateDisplay(frameRate) {
  document.getElementById("frameRate").textContent = frameRate;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bugX += (Math.random() - 0.5) * 300;
  bugY += (Math.random() - 0.5) * 00;
  bugX = Math.max(0, Math.min(canvas.width, bugX));
  bugY = Math.max(0, Math.min(canvas.height, bugY));
  drawBug();
}

function drawBug() {
  ctx.beginPath();
  ctx.arc(bugX, bugY, 30, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function onClickCanvas(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (Math.sqrt((x - bugX) ** 2 + (y - bugY) ** 2) < 30) {
    score++;
    updateScoreDisplay();
    jumpingInterval -= 50;
    clearInterval(gameLoopId);
    gameLoopId = setInterval(gameLoop, jumpingInterval);
  }
}

function onResetScoreButtonClick() {
  resetGame();
}

function onResetSpeedButtonClick() {
  jumpingInterval = 1000;
  clearInterval(gameLoopId);
  gameLoopId = setInterval(gameLoop, jumpingInterval);
  updateFrameRateDisplay(1000/jumpingInterval);
}

canvas.addEventListener("click", onClickCanvas);
document.getElementById("resetScoreButton").addEventListener("click", onResetScoreButtonClick);
document.getElementById("resetSpeedButton").addEventListener("click", onResetSpeedButtonClick);

resetGame();



