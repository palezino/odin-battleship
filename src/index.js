console.log("so it begins...");

const Ship = (length) => {
  let shipLength = length;

  const wasHit = () => {
    shipLength -= 1;
  };

  const isSunk = () => {
    if (shipLength === 0) {
      return console.log("Ship is sunk!");
    }
  };
};

const Gameboard = () => {
  // gameboard should have two coordinates X and Y which are represented by numbers
  // from 0 to 9, and look like [0,0], [0,1]... next line [1,0], [1,1]...
  const createBoard = () => {
    const board = [];
    let x = 0;
    while (x < 10) {
      for (let y = 0; y < 10; y++) {
        board.push([x, y]);
      }
      x++;
    }
    return board;
  };
  return { createBoard };
};

const board = Gameboard();
console.log(board.createBoard());
