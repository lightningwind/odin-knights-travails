/* Employ a graph BFS search algorithm since we are interested in finding 
a shortest path i.e. the fewest number of moves the knight will make. As it turns out,
BFS correctly computes shortest path distances, and does so efficiently. */

const squareRegistry = new Map();
const KNIGHT_MOVES = [ // [<xOffset>, <yOffset>]
  [1, 2], [1, -2],
  [2, 1], [2, -1],
  [-1, 2], [-1, -2],
  [-2, 1], [-2, -1],
];

/* Returns a list of chess squares the knight could move to
starting from the square (x, y). */
const chessSquares = (x, y) => {
  const xPos = x;
  const yPos = y;
  let predecessor;

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = newPredecessor || predecessor;
  };

  const name = () => `[${x}, ${y}]`;

  // Evaluates the knight's moves against its offsets
  const allPossibleKnightMoves = () => {
    return KNIGHT_MOVES
      .map((offset) => newSquareFrom(offset[0], offset[1]))
      .filter((square) => square !== undefined);
  };

  // Calculates a new set of chess coordinates against the given offsets <xOffset> and <yOffset>
  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPos + xOffset, yPos + yOffset];
    // Don't allow any moves to go off the chess board
    if ((0 <= newX && newX <= 7) && (0 <= newY && newY <= 7)) {
      return chessSquares(newX, newY);
    }
  };
};

/* Returns a list of moves the knight will make to 
get from square <start> to square <end>. */
const knightMoves = (start, end) => {
  // TODO
};

console.log(knightMoves([0, 0], [1,2]));
console.log(knightMoves([0,0], [3,3]));
console.log(knightMoves([3,3], [0,0]));