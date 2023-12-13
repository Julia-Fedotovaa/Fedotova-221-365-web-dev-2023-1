let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
    if (checkForWin(currentPlayer)) {
      alert(currentPlayer + " победил!");
      resetGame();
    } else if (checkForDraw()) {
      alert("Ничья!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkForWin(player) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  return false;
}

function checkForDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  let cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
  currentPlayer = 'X';
}
