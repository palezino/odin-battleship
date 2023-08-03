// create 4 one-square ships
// 3 - two-square ships
// 2 - three-square ships
// 1 - four-square ship
// make a rule for a ship location

const Ship = (coordinates) => {
  let shipLength = coordinates.length;
  const location = [...coordinates];

  const sameXcb = (value, index, array) => {
    console.log(value);
    if (
      array[index + 1] === undefined ||
      Math.abs(value[1] - array[index + 1][1]) === 1
    ) {
      return true;
    }
  };

  const sameYcb = (value, index, array) => {
    console.log(value);
    if (
      array[index + 1] === undefined ||
      Math.abs(value[0] - array[index + 1][0]) === 1
    ) {
      return true;
    }
  };

  const checkCoordinates = () => {
    /*  
    coordinates: if x is the same then y can only differ by 1
                 if y is the same then x can only differ by 1
    */
    if (coordinates.length === 1) {
      return true;
    }
    // if x is the same....
    if (coordinates[0][0] === coordinates[1][0]) {
      return coordinates.every(sameXcb);
    }
    // if y is the same...
    if (coordinates[0][1] === coordinates[1][1]) {
      return coordinates.every(sameYcb);
    }
    return false;
  };

  const isSunk = () => console.log("Ship is sunk!");

  const wasHit = () => {
    console.log(shipLength);
    shipLength -= 1;
    if (shipLength === 0) {
      isSunk();
    }
  };

  return { location, wasHit, checkCoordinates };
};

// gameboard will take ships locations as an array
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
  return { createBoard, shipsLocations };
};

const ship1 = Ship([
  [2, 2],
  [1, 2],
]);
const ship2 = Ship([
  [2, 5],
  [2, 6],
  [2, 7],
]);

console.log(ship1.checkCoordinates());
// ship1.wasHit();
// ship1.wasHit();

// const board = Gameboard(ship1);
// console.log(board.shipsLocations);
