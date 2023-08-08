/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
// create 4 one-square ships
// 3 - two-square ships
// 2 - three-square ships
// 1 - four-square ship

const Ship = (coordinates) => {
  let shipLength = coordinates.length;
  const location = [...coordinates];
  // check if a ship is on the board
  const isOnTheBoard = () =>
    coordinates.every((item) => {
      if (item[0] >= 0 && item[1] >= 0 && item[0] <= 9 && item[1] <= 9) {
        return true;
      }
    });

  // cb functions for checkCoordinates()
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

  return { location, wasHit, checkCoordinates, isOnTheBoard };
};

// gameboard will take ships locations as an array
const Gameboard = () => {
  const shipsLocations = [];
  // const missedShots = [];
  // const sunkenShips = [];

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
  // put the ships on the board (in random places)
  const put1squareShips = () => {
    // 4 x 1-square ships
    const ship1square = [];
    for (let i = 0; i < 4; i++) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstScquare = [x, y];
      ship1square.push(firstScquare);
    }
    return ship1square;
  };
  const put3squareShips = () => {
    // 3-square ships x 2
    // next checks should be applied to the firstSquare
    // check for coordinates to do not go over 9 and less then 0
    // check for ships to not cross each others
    const ship3squares = [];
    for (let i = 0; i < 2; i++) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstScquare = [x, y];
      let secondSquare;
      let thirdSquare;
      // randomly choose the direction
      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
      if (dirXY) {
        // also check for coordinates to do not go over 9 and less then 0
        if ((dirPlusMinus && firstScquare[0] < 2) || firstScquare[0] < 8) {
          secondSquare = [x + 1, y];
          thirdSquare = [x + 2, y];
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
        }
        ship3squares.push(firstScquare, secondSquare, thirdSquare);
      } else {
        // also check for coordinates to do not go over 9 and less then 0
        if ((dirPlusMinus && firstScquare[1] < 2) || firstScquare[1] < 8) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
        }
        ship3squares.push(firstScquare, secondSquare, thirdSquare);
      }
    }
    console.log(ship3squares);
  };
  // const receiveAttack = (coordinates) => {
  // if coordinates in the shipsLocations - mark as hit
  // else add it to missedShots
  // if ship is destroyed add it to sunken ships
  // };
  return { createBoard, shipsLocations, put1squareShips, put3squareShips };
};

// const ship1 = Ship([
//   [2, 2],
//   [1, 2],
// ]);
// const ship2 = Ship([
//   [2, 5],
//   [2, 6],
//   [2, 7],
// ]);

const board = Gameboard();

board.put3squareShips();
// ship1.wasHit();
// ship1.wasHit();

// const board = Gameboard(ship1);
// console.log(board.shipsLocations);
