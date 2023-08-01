console.log("so it begins...");

const Ship = (coordinates) => {
  let shipLength = coordinates.length;
  const location = [...coordinates];

  const isSunk = () => console.log("Ship is sunk!");

  const wasHit = () => {
    console.log(shipLength);
    shipLength -= 1;
    if (shipLength === 0) {
      isSunk();
    }
  };

  return { location, wasHit };
};

const ship1 = Ship([
  [2, 2],
  [2, 3],
]);
const ship2 = Ship([
  [2, 5],
  [2, 6],
  [2, 7],
]);

console.log(ship1);
ship1.wasHit();
ship1.wasHit();

const Gameboard = (ship) => {
  const shipsLocations = [];
  const missedShots = [];
  const sunkenShips = [];
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
  const receiveAttack = (coordinates) => {
    // if coordinates in the shipsLocations - mark as hit
    // else add it to missedShots
    // if ship is destroyed add it to sunken ships
  };
  return { createBoard };
};

// const board = Gameboard();
// console.log(board.createBoard());
