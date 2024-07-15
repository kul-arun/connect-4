export function checkWin(gameBoard, currentPlayer, ROWS, COLS) {
  // Check horizontal matches
  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS - 3; ++col) {
      if (
        gameBoard[row][col] === currentPlayer &&
        gameBoard[row][col + 1] === currentPlayer &&
        gameBoard[row][col + 2] === currentPlayer &&
        gameBoard[row][col + 3] === currentPlayer
      ) {
        return true;
      }
    }
  }

  // Check vertical matches
  for (let col = 0; col < COLS; ++col) {
    for (let row = 0; row < ROWS - 3; ++row) {
      if (
        gameBoard[row][col] === currentPlayer &&
        gameBoard[row + 1][col] === currentPlayer &&
        gameBoard[row + 2][col] === currentPlayer &&
        gameBoard[row + 3][col] === currentPlayer
      ) {
        return true;
      }
    }
  }

  // Check off-diagonal matches (bottom-left to top-right)
  for (let row = 3; row < ROWS; ++row) {
    for (let col = 0; col < COLS - 3; ++col) {
      if (
        gameBoard[row][col] === currentPlayer &&
        gameBoard[row - 1][col + 1] === currentPlayer &&
        gameBoard[row - 2][col + 2] === currentPlayer &&
        gameBoard[row - 3][col + 3] === currentPlayer
      ) {
        return true;
      }
    }
  }

  // Check main-diagonal matches (top-left to bottom-right)
  for (let row = 0; row < ROWS - 3; row++) {
    for (let col = 0; col < COLS - 3; col++) {
      if (
        gameBoard[row][col] === currentPlayer &&
        gameBoard[row + 1][col + 1] === currentPlayer &&
        gameBoard[row + 2][col + 2] === currentPlayer &&
        gameBoard[row + 3][col + 3] === currentPlayer
      ) {
        return true;
      }
    }
  }
  return false;
}
