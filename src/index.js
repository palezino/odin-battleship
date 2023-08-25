/* eslint-disable no-lonely-if */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable default-case */
/* eslint-disable no-loop-func */
/* eslint-disable no-else-return */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

const Ship = () => {
  // put the ships on the board (in random places)
  // DONE! //make checking function universal or adaptive for any type of ship
  // DONE! // make functions to place 2 squares and 1 squares ships (start placing from the longest)
  // DONE! // Do not create neighbour squares subarray for squares that are not on the map
  // DONE! // 3-square ships x 2
  // DONE! // the existing ship should inlcude a subarray with all the squares around it
  // DONE! // check for ships to not cross each others
  // DONE! // the firstSquare shouldn't be in the existing ship and also shouldn't be next to other ship
  // DONE! // the secondSquare and thirdSquare shouldn't be there either
  // DONE! // make calcNeighbourSquares function universal
  // ON HOLD // simplify functions to make one universal function to place all the ships
  // ON HOLD // create a variable to store an array of checks check only necessary elements
  // ON HOLD // try to store ships in an object

  const shipSquares = [];
  const neighbourSquares = [];

  const checkOverlapping = (shipArr, square) => {
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

  const calcNeighbourSquares = (firstSquare, shipLength, dir = "x") => {
    const result = [];
    if (dir === "x") {
      // for 1 square ship: a, b, f, k, l, m, n, o
      // for 2 square ship: a, b, c, f, j, k, l, m, n, o
      // for 3 square ship: a, b, c, d, f, h, j, k, l, m, n, o
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 2, firstSquare[1] - 1];
      const d = [firstSquare[0] + 3, firstSquare[1] - 1];
      const e = [firstSquare[0] + 4, firstSquare[1] - 1];
      const f = [firstSquare[0] + shipLength, firstSquare[1]];
      const g = [firstSquare[0] + 4, firstSquare[1] + 1];
      const h = [firstSquare[0] + 3, firstSquare[1] + 1];
      const j = [firstSquare[0] + 2, firstSquare[1] + 1];
      const k = [firstSquare[0] + 1, firstSquare[1] + 1];
      const l = [firstSquare[0], firstSquare[1] + 1];
      const m = [firstSquare[0] - 1, firstSquare[1] + 1];
      const n = [firstSquare[0] - 1, firstSquare[1]];
      const o = [firstSquare[0] - 1, firstSquare[1] - 1];
      switch (shipLength) {
        case 1:
          result.push(a, b, f, k, l, m, n, o);
          break;
        case 2:
          result.push(a, b, c, f, j, k, l, m, n, o);
          break;
        case 3:
          result.push(a, b, c, d, f, h, j, k, l, m, n, o);
          break;
        case 4:
          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);
          break;
      }
    } else if (dir === "y") {
      // for 2 square ship: a, b, c, d, e, h, l, m, n, o
      // for 3 square ship: a, b, c, d, e, f, h, k, l, m, n, o
      const a = [firstSquare[0], firstSquare[1] - 1];
      const b = [firstSquare[0] + 1, firstSquare[1] - 1];
      const c = [firstSquare[0] + 1, firstSquare[1]];
      const d = [firstSquare[0] + 1, firstSquare[1] + 1];
      const e = [firstSquare[0] + 1, firstSquare[1] + 2];
      const f = [firstSquare[0] + 1, firstSquare[1] + 3];
      const g = [firstSquare[0] + 1, firstSquare[1] + 4];
      const h = [firstSquare[0], firstSquare[1] + shipLength];
      const j = [firstSquare[0] - 1, firstSquare[1] + 4];
      const k = [firstSquare[0] - 1, firstSquare[1] + 3];
      const l = [firstSquare[0] - 1, firstSquare[1] + 2];
      const m = [firstSquare[0] - 1, firstSquare[1] + 1];
      const n = [firstSquare[0] - 1, firstSquare[1]];
      const o = [firstSquare[0] - 1, firstSquare[1] - 1];
      switch (shipLength) {
        case 2:
          result.push(a, b, c, d, e, h, l, m, n, o);
          break;
        case 3:
          result.push(a, b, c, d, e, f, h, k, l, m, n, o);
          break;
        case 4:
          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);
          break;
      }
    }
    return result;
  };

  const make1sqShip = () => {
    if (shipSquares.length === 10) {
      console.log("Ship squares:");
      console.log(shipSquares);
      console.log("Neigbour squares:");
      console.log(neighbourSquares);
      return shipSquares;
    } else {
      // define x,y and the first square of the ship
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const firstSquare = [x, y];
      neighbourSquares.push(calcNeighbourSquares(firstSquare, 1));
      // if some of the squares overlaps the previous ship - repeat from the beginning
      if (
        checkOverlapping(shipSquares, firstSquare) ||
        checkOverlapping(neighbourSquares, firstSquare)
      ) {
        neighbourSquares.pop();
        return make1sqShip();
      } else {
        shipSquares.push([firstSquare]);
        return make1sqShip();
      }
    }
  };

  const make2sqShip = () => {
    if (shipSquares.length === 6) {
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
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, "x"));
        } else {
          secondSquare = [x - 1, y];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, "x"));
        }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 1) || firstSquare[1] < 9) {
          secondSquare = [x, y + 1];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, "y"));
        } else {
          secondSquare = [x, y - 1];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, "y"));
        }
      }
      // if some of the squares overlaps the previous ship - repeat from the beginning
      const ship = [...firstSquare, secondSquare];
      if (
        ship.some(
          (item) =>
            checkOverlapping(shipSquares, item) ||
            checkOverlapping(neighbourSquares, item)
        )
      ) {
        neighbourSquares.pop();
        return make2sqShip();
      } else {
        shipSquares.push([firstSquare, secondSquare]);
        return make2sqShip();
      }
    }
  };

  const make3sqShips = () => {
    if (shipSquares.length === 3) {
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
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, "x"));
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, "x"));
        }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, "y"));
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, "y"));
        }
      }
      // if some of the squares overlaps the previous ship - repeat from the beginning
      const ship = [...firstSquare, secondSquare, thirdSquare];
      ship.some(
        (item) =>
          checkOverlapping(shipSquares, item) ||
          checkOverlapping(neighbourSquares, item)
      );
      if (
        ship.some(
          (item) =>
            checkOverlapping(shipSquares, item) ||
            checkOverlapping(neighbourSquares, item)
        )
      ) {
        neighbourSquares.pop();
        return make3sqShips();
      } else {
        shipSquares.push([firstSquare, secondSquare, thirdSquare]);
        return make3sqShips();
      }
    }
  };

  const make4sqShip = () => {
    if (shipSquares.length === 1) {
      // console.log("Ship squares:");
      // console.log(shipSquares);
      // console.log("Neigbour squares:");
      // console.log(neighbourSquares);
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
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, "x"));
          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, "x"));
        } else {
          secondSquare = [x - 1, y];
          thirdSquare = [x - 2, y];
          fourthSquare = [x - 3, y];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, "x"));
          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, "x"));
        }
        // if some of the squares overlaps the previous ship - repeat from the beginning
        // !! create a variable to store an array of checks
        // check only necessary elements
        // if (
        //   checkOverlapping(shipSquares, firstSquare) ||
        //   checkOverlapping(shipSquares, secondSquare) ||
        //   checkOverlapping(shipSquares, thirdSquare) ||
        //   checkOverlapping(shipSquares, fourthSquare) ||
        //   checkOverlapping(neighbourSquares, firstSquare) ||
        //   checkOverlapping(neighbourSquares, secondSquare) ||
        //   checkOverlapping(neighbourSquares, thirdSquare) ||
        //   checkOverlapping(neighbourSquares, fourthSquare)
        // ) {
        //   neighbourSquares.pop();
        //   return make4sqShip();
        // } else {
        //   shipSquares.push([
        //     firstSquare,
        //     secondSquare,
        //     thirdSquare,
        //     fourthSquare,
        //   ]);
        //   return make4sqShip();
        // }
      } else {
        // also check for coordinates to do not go over 9 or be less then 0
        if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {
          secondSquare = [x, y + 1];
          thirdSquare = [x, y + 2];
          fourthSquare = [x, y + 3];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, "y"));
          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, "y"));
        } else {
          secondSquare = [x, y - 1];
          thirdSquare = [x, y - 2];
          fourthSquare = [x, y - 3];
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, "y"));
          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, "y"));
        }
      }
      // if some of the squares overlaps the previous ship - repeat from the beginning
      const ship = [...firstSquare, secondSquare, thirdSquare, fourthSquare];
      if (
        // checkOverlapping(shipSquares, firstSquare) ||
        // checkOverlapping(shipSquares, secondSquare) ||
        // checkOverlapping(shipSquares, thirdSquare) ||
        // checkOverlapping(shipSquares, fourthSquare) ||
        // checkOverlapping(neighbourSquares, firstSquare) ||
        // checkOverlapping(neighbourSquares, secondSquare) ||
        // checkOverlapping(neighbourSquares, thirdSquare) ||
        // checkOverlapping(neighbourSquares, fourthSquare)
        ship.some(
          (item) =>
            checkOverlapping(shipSquares, item) ||
            checkOverlapping(neighbourSquares, item)
        )
      ) {
        neighbourSquares.pop();
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
  };

  // make ships manually
  const makeOneShip = (firstSquare, length, dir = "x") => {
    if (shipSquares.length === 10) {
      console.log("Can't create any more ships!");
      return "Can't create any more ships!";
    }
    const ship = [];
    const x = firstSquare[0];
    const y = firstSquare[1];
    let secondSquare;
    let thirdSquare;
    let fourthSquare;
    if (dir === "x") {
      if (firstSquare[0] < length - 1 || firstSquare[0] < 10 - (length - 1)) {
        secondSquare = [x + 1, y];
        thirdSquare = [x + 2, y];
        fourthSquare = [x + 3, y];
      } else {
        console.log("Ship goes out of the gameboard!");
        return "Ship goes out of the gameboard!";
      }
      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));
      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);
      ship.length = length;
    } else if (dir === "y") {
      if (firstSquare[1] < length - 1 || firstSquare[1] < 10 - (length - 1)) {
        secondSquare = [x, y + 1];
        thirdSquare = [x, y + 2];
        fourthSquare = [x, y + 3];
      } else {
        console.log("Ship goes out of the gameboard!");
        return "Ship goes out of the gameboard!";
      }
      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));
      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);
      ship.length = length;
    }
    if (
      ship.some(
        (item) =>
          checkOverlapping(shipSquares, item) ||
          checkOverlapping(neighbourSquares, item)
      )
    ) {
      neighbourSquares.pop();
      console.log("Your ship ovelaps an exisiting ship!");
      return "Your ship ovelaps an exisiting ship!";
    } else {
      shipSquares.push(ship);
      console.log("Ship is created!");
      return ship;
    }
  };
  // place all the ships
  const makeShips = () => {
    make4sqShip();
    make3sqShips();
    make2sqShip();
    return make1sqShip();
    // makeOneShip([0, 1], 4, "y");
    // makeOneShip([9, 7], 3, "y");
    // makeOneShip([3, 2], 3, "x");
    // makeOneShip([1, 6], 2, "y");
    // makeOneShip([6, 9], 2, "x");
    // makeOneShip([5, 5], 2, "x");
    // makeOneShip([7, 1], 1);
    // makeOneShip([3, 7], 1);
    // makeOneShip([8, 3], 1);
    // makeOneShip([0, 9], 1);
    // console.log("Ship squares:");
    // console.log(shipSquares);
    // console.log("Neigbour squares:");
    // console.log(neighbourSquares);
  };

  // show an array with created ships
  const showShips = () => shipSquares;

  return { makeShips, makeOneShip, showShips };
};

// gameboard will take ships locations as an array
const Gameboard = (shipsArr) => {
  // DONE! // find out how to record missed shops
  const shipsLocations = shipsArr;
  const sunkenShips = [];
  const missedShots = [];

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

  const showShips = () => shipsLocations;
  const recordShips = () => {
    const arr = [];
    shipsLocations.forEach((item, index) => {
      arr.push([item.length, index]);
    });
    return arr;
  };

  const hitShips = recordShips();
  const receiveAttack = (coordinates) => {
    shipsLocations.forEach((item, index) => {
      if (
        item.some(
          (value) => value[0] === coordinates[0] && value[1] === coordinates[1]
        )
      ) {
        // record hit ships
        hitShips.forEach((element) => {
          if (element[element.length - 1] === index) {
            element.unshift(coordinates);
          }
        });
        // check if the ship sunk
        if (
          hitShips.some((value) => value[value.length - 2] === value.length - 2)
        ) {
          sunkenShips.push(item);
          console.log("Sunk", sunkenShips);
        }
        console.log("Hit", hitShips);
      }
    });
    // record missing shots
    if (
      !hitShips.some(
        (value) =>
          value[0][0] === coordinates[0] && value[0][1] === coordinates[1]
      )
    ) {
      missedShots.push(coordinates);
      console.log("Missed", missedShots);
    }
  };
  return {
    createBoard,
    showShips,
    receiveAttack,
    hitShips,
  };
};

// create Players that can create ships and attack!!!

const ships = Ship();
const shipsArr = ships.makeShips();
// ships.makeOneShip([1, 1], 4, "x");
// const board = Gameboard(shipsArr);
// console.log(board.showShips());

// board.receiveAttack([4, 0]);
// board.receiveAttack([3, 0]);
// board.receiveAttack([2, 0]);
// board.receiveAttack([5, 0]);

// board.put3squareShips();
// board.make4sqShip();
// board.make3sqShips();
// board.make2sqShip();
// board.make1sqShip();
// board.createBoard();
// console.log(board.showShips());
// ship1.wasHit();
// ship1.wasHit();

// const board = Gameboard(ship1);
// console.log(board.shipsLocations);
