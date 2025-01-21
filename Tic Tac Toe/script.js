const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let board = Array(9).fill(null);

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      combo.forEach(index => cells[index].classList.add('winning'));
      return board[a];
    }
  }

  return board.includes(null) ? null : 'Draw';
}

function handleClick(e) {
  const index = e.target.dataset.index;

  if (!board[index]) {
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add('taken', currentPlayer);

    const winner = checkWinner();

    if (winner) {
      message.textContent = winner === 'Draw' ? "It's a Draw!" : `${winner} Wins! 🎉`;
      cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function restartGame() {
  board.fill(null);
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
    cell.addEventListener('click', handleClick);
  });
  currentPlayer = 'X';
  message.textContent = `Player ${currentPlayer}'s Turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

message.textContent = `Player ${currentPlayer}'s Turn`;
