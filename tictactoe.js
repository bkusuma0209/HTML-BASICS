const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],  
  [0,3,6],[1,4,7],[2,5,8],  
  [0,4,8],[2,4,6]           
];

function createBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.textContent = cell;
    cellDiv.addEventListener("click", () => handleClick(index));
    boardElement.appendChild(cellDiv);
  });
}

function handleClick(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = currentPlayer;
  checkGameStatus();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
  createBoard();
}

function checkGameStatus() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusElement.textContent = `Player ${board[a]} wins! 🎉`;
      gameOver = true;
      return;
    }
  }

  if (!board.includes("")) {
    statusElement.textContent = "It's a draw!";
    gameOver = true;
  }
}

function updateStatus() {
  if (!gameOver) {
    statusElement.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  updateStatus();
  createBoard();
}

createBoard();
