/* eslint-disable no-loop-func */
/* eslint-disable no-else-return */
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
  // const shipsLocations = [];
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
    console.log(board);
    return board;
  };
  // put the ships on the board (in random places)
  const put1squareShips = () => {
    // 4 x 1-square ships
    const ship1square = [];
    for (let i = 0; i < 4; i++) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstSquare = [x, y];
      ship1square.push(firstSquare);
    }
    return ship1square;
  };
  // DONE!//make checking function universal or adaptive for any type of ship
  // DONE! // make functions to place 2 squares and 1 squares ships (start placing from the longest)
  // Do not create neighbour squares subarray for squares that are not on the map
  // simplify functions to make one universal function to place all the ships

  // const checkOverlaping = (shipArr, square) => {
  //   if (shipArr.length === 0) {
  //     return false;
  //   } else {
  //     return shipArr[0].some(
  //       (value) => square[0] === value[0] && square[1] === value[1]
  //     );
  //   }
  // };
  const checkOverlaping = (shipArr, square) => {
    const result = [];
    if (shipArr.length === 0) {
      return false;
    } else {
      // console.log(shipArr);
      shipArr.forEach((item) => {
        result.push(
          item.some((value) => square[0] === value[0] && square[1] === value[1])
        );
      });
    }
    // console.log(result);
    return result.some((value) => value === true);
  };
  const shipSquares = [];
  const nextToSquares = [];

  const calcNeighbourSquares2 = (firstSquare, dir) => {
    const result = [];
    if (dir === "x") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 2, firstSquare[1] - 1];
      const d = [firstSquare[0] + 2, firstSquare[1]];
      const e = [firstSquare[0] + 2, firstSquare[1] + 1];
      const f = [firstSquare[0] + 1, firstSquare[1] + 1];
      const g = [firstSquare[0], firstSquare[1] + 1];
      const h = [firstSquare[0] - 1, firstSquare[1] + 1];
      const j = [firstSquare[0] - 1, firstSquare[1]];
      const k = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, e, f, g, h, j, k);
    } else if (dir === "y") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 1, firstSquare[1]];
      const d = [firstSquare[0] + 1, firstSquare[1] + 1];
      const e = [firstSquare[0] + 1, firstSquare[1] + 2];
      const f = [firstSquare[0], firstSquare[1] + 2];
      const g = [firstSquare[0] - 1, firstSquare[1] + 2];
      const h = [firstSquare[0] - 1, firstSquare[1] + 1];
      const j = [firstSquare[0] - 1, firstSquare[1]];
      const k = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, e, f, g, h, j, k);
    }
    return result;
  };

  const make2sqShip = () => {
    if (shipSquares.length === 6) {
      console.log("Ship squares:");
      console.log(shipSquares);
      console.log("Neigbour squares:");
      console.log(nextToSquares);
      return shipSquares;
    } else {
      // define x,y and the first square of the ship
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstSquare = [x, y];
      // define the second, the third squares, and the fourth
      let secondSquare;
      // randomly choose the direction
      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
      if (dirXY) {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[0] < 1) || firstSquare[0] < 9) {
          secondSquare = [x + 1, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares2(firstSquare, "x"));
        } else {
          secondSquare = [x - 1, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares2(secondSquare, "x"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare)
        ) {
          nextToSquares.pop();
          return make2sqShip();
        } else {
          shipSquares.push([firstSquare, secondSquare]);
          return make2sqShip();
        }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 1) || firstSquare[1] < 9) {
          secondSquare = [x, y + 1];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares2(firstSquare, "y"));
        } else {
          secondSquare = [x, y - 1];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares2(secondSquare, "y"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare)
        ) {
          nextToSquares.pop();
          return make2sqShip();
        } else {
          shipSquares.push([firstSquare, secondSquare]);
          return make2sqShip();
        }
      }
    }
  };
  // calculate neighbours for 3 squares ship
  const calcNeighbourSquares3 = (firstSquare, dir) => {
    const result = [];
    if (dir === "x") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 2, firstSquare[1] - 1];
      const d = [firstSquare[0] + 3, firstSquare[1] - 1];
      const e = [firstSquare[0] + 3, firstSquare[1]];
      const f = [firstSquare[0] + 3, firstSquare[1] + 1];
      const g = [firstSquare[0] + 2, firstSquare[1] + 1];
      const h = [firstSquare[0] + 1, firstSquare[1] + 1];
      const j = [firstSquare[0], firstSquare[1] + 1];
      const k = [firstSquare[0] - 1, firstSquare[1] + 1];
      const l = [firstSquare[0] - 1, firstSquare[1]];
      const m = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, e, f, g, h, j, k, l, m);
    } else if (dir === "y") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 1, firstSquare[1]];
      const d = [firstSquare[0] + 1, firstSquare[1] + 1];
      const e = [firstSquare[0] + 1, firstSquare[1] + 2];
      const f = [firstSquare[0] + 1, firstSquare[1] + 3];
      const g = [firstSquare[0], firstSquare[1] + 3];
      const h = [firstSquare[0] - 1, firstSquare[1] + 3];
      const j = [firstSquare[0] - 1, firstSquare[1] + 2];
      const k = [firstSquare[0] - 1, firstSquare[1] + 1];
      const l = [firstSquare[0] - 1, firstSquare[1]];
      const m = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, e, f, g, h, j, k, l, m);
    }
    return result;
  };

  // recursive function for 3 squares ship

  const make3sqShips = () => {
    if (shipSquares.length === 3) {
      console.log("Ship squares:");
      console.log(shipSquares);
      console.log("Neigbour squares:");
      console.log(nextToSquares);
      return shipSquares;
    } else {
      // define x,y and the first square of the ship
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstSquare = [x, y];
      // define the second and the third squares
      let secondSquare;
      let thirdSquare;
      // randomly choose the direction
      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
      if (dirXY) {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[0] < 2) || firstSquare[0] < 8) {
          secondSquare = [x + 1, y];
          thirdSquare = [x + 2, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares3(firstSquare, "x"));
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares3(thirdSquare, "x"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(shipSquares, thirdSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare) ||
          checkOverlaping(nextToSquares, thirdSquare)
        ) {
          nextToSquares.pop();
          return make3sqShips();
        } else {
          shipSquares.push([firstSquare, secondSquare, thirdSquare]);
          return make3sqShips();
        }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares3(firstSquare, "y"));
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares3(thirdSquare, "y"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(shipSquares, thirdSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare) ||
          checkOverlaping(nextToSquares, thirdSquare)
        ) {
          nextToSquares.pop();
          return make3sqShips();
        } else {
          shipSquares.push([firstSquare, secondSquare, thirdSquare]);
          return make3sqShips();
        }
      }
    }
  };

  const calcNeighbourSquares4 = (firstSquare, dir) => {
    const result = [];
    if (dir === "x") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 2, firstSquare[1] - 1];
      const d = [firstSquare[0] + 3, firstSquare[1] - 1];
      const dd = [firstSquare[0] + 4, firstSquare[1] - 1];
      const e = [firstSquare[0] + 4, firstSquare[1]];
      const f = [firstSquare[0] + 4, firstSquare[1] + 1];
      const ff = [firstSquare[0] + 3, firstSquare[1] + 1];
      const g = [firstSquare[0] + 2, firstSquare[1] + 1];
      const h = [firstSquare[0] + 1, firstSquare[1] + 1];
      const j = [firstSquare[0], firstSquare[1] + 1];
      const k = [firstSquare[0] - 1, firstSquare[1] + 1];
      const l = [firstSquare[0] - 1, firstSquare[1]];
      const m = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, dd, e, f, ff, g, h, j, k, l, m);
    } else if (dir === "y") {
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 1, firstSquare[1]];
      const d = [firstSquare[0] + 1, firstSquare[1] + 1];
      const e = [firstSquare[0] + 1, firstSquare[1] + 2];
      const f = [firstSquare[0] + 1, firstSquare[1] + 3];
      const ff = [firstSquare[0] + 1, firstSquare[1] + 4];
      const g = [firstSquare[0], firstSquare[1] + 4];
      const gg = [firstSquare[0] - 1, firstSquare[1] + 4];
      const h = [firstSquare[0] - 1, firstSquare[1] + 3];
      const j = [firstSquare[0] - 1, firstSquare[1] + 2];
      const k = [firstSquare[0] - 1, firstSquare[1] + 1];
      const l = [firstSquare[0] - 1, firstSquare[1]];
      const m = [firstSquare[0] - 1, firstSquare[1] - 1];
      result.push(a, b, c, d, e, f, ff, g, gg, h, j, k, l, m);
    }
    return result;
  };
  const make4sqShip = () => {
    if (shipSquares.length === 1) {
      console.log("Ship squares:");
      console.log(shipSquares);
      console.log("Neigbour squares:");
      console.log(nextToSquares);
      return shipSquares;
    } else {
      // define x,y and the first square of the ship
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstSquare = [x, y];
      // define the second, the third squares, and the fourth
      let secondSquare;
      let thirdSquare;
      let fourthSquare;
      // randomly choose the direction
      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
      if (dirXY) {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[0] < 3) || firstSquare[0] < 7) {
          secondSquare = [x + 1, y];
          thirdSquare = [x + 2, y];
          fourthSquare = [x + 3, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares4(firstSquare, "x"));
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
          fourthSquare = [x - 3, y];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares4(fourthSquare, "x"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(shipSquares, thirdSquare) ||
          checkOverlaping(shipSquares, fourthSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare) ||
          checkOverlaping(nextToSquares, thirdSquare) ||
          checkOverlaping(nextToSquares, fourthSquare)
        ) {
          nextToSquares.pop();
          return make4sqShip();
        } else {
          shipSquares.push([
            firstSquare,
            secondSquare,
            thirdSquare,
            fourthSquare,
          ]);
          return make4sqShip();
        }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
          fourthSquare = [x, y + 3];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares4(firstSquare, "y"));
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
          fourthSquare = [x, y - 3];
          // calculate all the neighbour squares and push to subarray
          nextToSquares.push(calcNeighbourSquares4(fourthSquare, "y"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        if (
          checkOverlaping(shipSquares, firstSquare) ||
          checkOverlaping(shipSquares, secondSquare) ||
          checkOverlaping(shipSquares, thirdSquare) ||
          checkOverlaping(shipSquares, fourthSquare) ||
          checkOverlaping(nextToSquares, firstSquare) ||
          checkOverlaping(nextToSquares, secondSquare) ||
          checkOverlaping(nextToSquares, thirdSquare) ||
          checkOverlaping(nextToSquares, fourthSquare)
        ) {
          nextToSquares.pop();
          return make4sqShip();
        } else {
          shipSquares.push([
            firstSquare,
            secondSquare,
            thirdSquare,
            fourthSquare,
          ]);
          return make4sqShip();
        }
      }
    }
  };

  const put3squareShips = () => {
    // DONE!// 3-square ships x 2
    // DONE!// the existing ship should inlcude a subarray with all the squares around it
    // next checks should be applied to the firstSquare
    // DONE!// check for ships to not cross each others
    // the firstSquare shouldn't be in the existing ship and also shouldn't be next to other ship FUCK
    // the secondSquare and thirdSquare shouldn't be there either
    // maybe take a ship array and its subarray and subtract all the squares from the createBoard function
    // like this I only can use the rest of the squares
    const ship3squares = [];
    // create a subarray with the squares around the ship
    const neigbourSquares = [];
    for (let i = 0; i < 2; i++) {
      // const x = Math.floor(Math.random() * 10);
      // const y = Math.floor(Math.random() * 10);
      // const firstSquare = [x, y];

      // if (!(ship3squares.length === 0)) {
      //   ship3squares[0].some(
      //     (item) => firstSquare[0] === item[0] && firstSquare[1] === item[1]
      //   );
      //   neigbourSquares[0].some(
      //     (item) => firstSquare[0] === item[0] && firstSquare[1] === item[1]
      //   );
      // }

      let x;
      let y;
      let firstSquare;
      if (ship3squares.length === 0) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        firstSquare = [x, y];
      } else {
        // check if the firstSquare crosses other ships
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        firstSquare = [x, y];
        // make a function where .some() will be inside it
        while (
          ship3squares[0].some(
            (item) => firstSquare[0] === item[0] && firstSquare[1] === item[1]
          ) ||
          neigbourSquares[0].some(
            (item) => firstSquare[0] === item[0] && firstSquare[1] === item[1]
          )
        ) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          firstSquare = [x, y];
        }
      }

      let secondSquare;
      let thirdSquare;
      // randomly choose the direction
      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
      if (dirXY) {
        // also check for coordinates to do not go over 9 and less then 0
        if ((dirPlusMinus && firstSquare[0] < 2) || firstSquare[0] < 8) {
          secondSquare = [x + 1, y];
          thirdSquare = [x + 2, y];
          // calculate and push to subarray all the neighbour squares
          const a = [firstSquare[0], firstSquare[1] - 1];
          const b = [firstSquare[0] + 1, firstSquare[1] - 1];
          const c = [firstSquare[0] + 2, firstSquare[1] - 1];
          const d = [firstSquare[0] + 3, firstSquare[1] - 1];
          const e = [firstSquare[0] + 3, firstSquare[1]];
          const f = [firstSquare[0] + 3, firstSquare[1] + 1];
          const g = [firstSquare[0] + 2, firstSquare[1] + 1];
          const h = [firstSquare[0] + 1, firstSquare[1] + 1];
          const j = [firstSquare[0], firstSquare[1] + 1];
          const k = [firstSquare[0] - 1, firstSquare[1] + 1];
          const l = [firstSquare[0] - 1, firstSquare[1]];
          const m = [firstSquare[0] - 1, firstSquare[1] - 1];
          neigbourSquares.push([a, b, c, d, e, f, g, h, j, k, l, m]);
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
          // calculate and push to subarray all the neighbour squares
          const a = [firstSquare[0], firstSquare[1] - 1];
          const b = [firstSquare[0] + 1, firstSquare[1] - 1];
          const c = [firstSquare[0] + 2, firstSquare[1] - 1];
          const d = [firstSquare[0] + 3, firstSquare[1] - 1];
          const e = [firstSquare[0] + 3, firstSquare[1]];
          const f = [firstSquare[0] + 3, firstSquare[1] + 1];
          const g = [firstSquare[0] + 2, firstSquare[1] + 1];
          const h = [firstSquare[0] + 1, firstSquare[1] + 1];
          const j = [firstSquare[0], firstSquare[1] + 1];
          const k = [firstSquare[0] - 1, firstSquare[1] + 1];
          const l = [firstSquare[0] - 1, firstSquare[1]];
          const m = [firstSquare[0] - 1, firstSquare[1] - 1];
          neigbourSquares.push([a, b, c, d, e, f, g, h, j, k, l, m]);
        }
        // console.log("Original batch:");
        console.log(checkOverlaping(ship3squares, firstSquare));
        console.log(checkOverlaping(ship3squares, secondSquare));
        console.log(checkOverlaping(ship3squares, thirdSquare));
        // console.log("Testing batch:");
        // console.log(checkOverlaping2(ship3squares, firstSquare));
        // console.log(checkOverlaping2(ship3squares, secondSquare));
        // console.log(checkOverlaping2(ship3squares, thirdSquare));
        ship3squares.push([firstSquare, secondSquare, thirdSquare]);
      } else {
        // also check for coordinates to do not go over 9 and less then 0
        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
          // calculate and push to subarray all the neighbour squares
          const a = [firstSquare[0], firstSquare[1] - 1];
          const b = [firstSquare[0] + 1, firstSquare[1] - 1];
          const c = [firstSquare[0] + 1, firstSquare[1]];
          const d = [firstSquare[0] + 1, firstSquare[1] + 1];
          const e = [firstSquare[0] + 1, firstSquare[1] + 2];
          const f = [firstSquare[0] + 1, firstSquare[1] + 3];
          const g = [firstSquare[0], firstSquare[1] + 3];
          const h = [firstSquare[0] - 1, firstSquare[1] + 3];
          const j = [firstSquare[0] - 1, firstSquare[1] + 2];
          const k = [firstSquare[0] - 1, firstSquare[1] + 1];
          const l = [firstSquare[0] - 1, firstSquare[1]];
          const m = [firstSquare[0] - 1, firstSquare[1] - 1];
          neigbourSquares.push([a, b, c, d, e, f, g, h, j, k, l, m]);
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
          // calculate and push to subarray all the neighbour squares
          const a = [firstSquare[0], firstSquare[1] - 1];
          const b = [firstSquare[0] + 1, firstSquare[1] - 1];
          const c = [firstSquare[0] + 1, firstSquare[1]];
          const d = [firstSquare[0] + 1, firstSquare[1] + 1];
          const e = [firstSquare[0] + 1, firstSquare[1] + 2];
          const f = [firstSquare[0] + 1, firstSquare[1] + 3];
          const g = [firstSquare[0], firstSquare[1] + 3];
          const h = [firstSquare[0] - 1, firstSquare[1] + 3];
          const j = [firstSquare[0] - 1, firstSquare[1] + 2];
          const k = [firstSquare[0] - 1, firstSquare[1] + 1];
          const l = [firstSquare[0] - 1, firstSquare[1]];
          const m = [firstSquare[0] - 1, firstSquare[1] - 1];
          neigbourSquares.push([a, b, c, d, e, f, g, h, j, k, l, m]);
        }
        // console.log("Original batch:");
        console.log(checkOverlaping(ship3squares, firstSquare));
        console.log(checkOverlaping(ship3squares, secondSquare));
        console.log(checkOverlaping(ship3squares, thirdSquare));
        // console.log("Testing batch:");
        // console.log(checkOverlaping2(ship3squares, firstSquare));
        // console.log(checkOverlaping2(ship3squares, secondSquare));
        // console.log(checkOverlaping2(ship3squares, thirdSquare));
        ship3squares.push([firstSquare, secondSquare, thirdSquare]);
      }
    }

    console.log("Ship squares:");
    console.log(ship3squares);
    console.log("Neigbour squares:");
    console.log(neigbourSquares);
    return ship3squares;
  };
  // show an array with created ships
  const showShips = () => shipSquares;

  // const receiveAttack = (coordinates) => {
  // if coordinates in the shipsLocations - mark as hit
  // else add it to missedShots
  // if ship is destroyed add it to sunken ships
  // };
  return {
    createBoard,
    put1squareShips,
    put3squareShips,
    make2sqShip,
    make3sqShips,
    make4sqShip,
    showShips,
  };
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

// board.put3squareShips();
board.make4sqShip();
board.make3sqShips();
board.make2sqShip();
// console.log(board.showShips());
// ship1.wasHit();
// ship1.wasHit();

// const board = Gameboard(ship1);
// console.log(board.shipsLocations);
