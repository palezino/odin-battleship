/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
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
  // auxiliary functions
  const checkOverlapping = (shipArr, square) => {
    // console.log("checkOverlapping", shipArr);
    const result = [];
    if (shipArr.length === 0 || shipArr === undefined) {
      return false;
    } else {
      // console.log(square);
      shipArr.forEach((item) => {
        result.push(
          item.some((value) => square[0] === value[0] && square[1] === value[1])
        );
      });
    }
    // console.log(result);
    return result.some((value) => value === true);
  };
  // calculate squares that are right next to a ship
  const calcNeighbourSquares = (firstSquare, shipLength, dir = "x") => {
    console.log("firstSquare", firstSquare);
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

  const checkShipsNum = (length) => {
    let count = 0;
    switch (length) {
      case 4:
        if (shipSquares.length === 0) {
          // console.log("here");
          break;
        }
        shipSquares.forEach((item) => {
          if (item.length === 4) {
            count++;
          }
        });
        // console.log("count", count);
        if (count >= 1) {
          console.log("You only can have one 4-square ship!");
          return false;
        }
        break;
      case 3:
        shipSquares.forEach((item) => {
          if (item.length === 3) {
            count++;
          }
        });
        if (count >= 2) {
          console.log("You only can have two 3-square ships!");
          return false;
        }
        break;
      case 2:
        shipSquares.forEach((item) => {
          if (item.length === 2) {
            count++;
          }
        });
        if (count >= 3) {
          console.log("You only can have three 2-square ships!");
          return false;
        }
        break;
      case 1:
        shipSquares.forEach((item) => {
          if (item.length === 1) {
            count++;
          }
        });
        if (count >= 4) {
          console.log("You only can have four 1-square ships!");
          return false;
        }
        break;
    }
    return true;
  };

  // ships building functions
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
      // define the second
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
      const ship = [];
      ship.push(firstSquare, secondSquare);
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
          // calculate all the neighbour squares and push them to subarray
          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, "y"));
        }
      }
      // if some of the squares overlap the previous ship - repeat from the beginning
      const ship = [];
      ship.push(firstSquare, secondSquare, thirdSquare);
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
      const ship = [];
      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);
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
  const makeShip = (firstSquare, length, dir = "x") => {
    if (shipSquares.length === 10) {
      console.log("Can't create any more ships!");
      return false;
    }
    // console.log("Ship length", checkShipsNum(length));
    // stop the function if all ships of all sizes are created
    if (!checkShipsNum(length)) {
      return false;
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
        return false;
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
        return false;
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
      return false;
    } else {
      shipSquares.push(ship);
      console.log("Ship is created!");
      return true;
    }
  };
  // place all the ships
  const autoMakeShips = () => {
    make4sqShip();
    make3sqShips();
    make2sqShip();
    return make1sqShip();
    // makeShip([7, 2], 4, "y");
    // makeShip([2, 9], 4, "x");
    // makeShip([0, 1], 4, "y");
    // makeShip([9, 7], 3, "y");
    // makeShip([3, 2], 3, "x");
    // makeShip([1, 6], 2, "y");
    // makeShip([6, 9], 2, "x");
    // makeShip([5, 5], 2, "x");
    // makeShip([7, 1], 1);
    // makeShip([3, 7], 1);
    // makeShip([8, 3], 1);
    // makeShip([0, 9], 1);
    // console.log("Ship squares:");
    // console.log(shipSquares);
    // console.log("Neigbour squares:");
    // console.log(neighbourSquares);
  };

  // show an array with created ships
  const showShips = () => shipSquares;

  return {
    autoMakeShips,
    makeShip,
    showShips,
    shipSquares,
    neighbourSquares,
    checkOverlapping,
    calcNeighbourSquares,
  };
};

// gameboard will take ships locations as an array
const Gameboard = (shipsArr) => {
  const shipsLocations = shipsArr;
  const hitShips = []; // ? might be useless
  // const sunkShips = [];
  const missedShots = [];
  const sunkenShipsReg = [];
  // hitShipsReg [length, index, coordinates...]
  const hitShipsReg = [
    [4, 0],
    [3, 1],
    [3, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
  ];

  // ? might be useless
  const createBoard = () => {
    const board = [];
    let x = 0;
    while (x < 10) {
      for (let y = 0; y < 10; y++) {
        board.push([x, y]);
      }
      x++;
    }
    // console.log(board);
    return board;
  };

  // const showShips = () => shipsLocations;
  // const arrangeShips = () => {
  //   const arr = [];
  //   shipsLocations.forEach((item, index) => {
  //     arr.push([item.length, index]);
  //   });
  //   // console.log(arr);
  //   return arr;
  // };

  // takes ship coordinates, and hit coordinates, and returns true if the ship was hit
  const isHit = (ship, coordinates) =>
    ship.some(
      (value) => value[0] === coordinates[0] && value[1] === coordinates[1]
    );

  const isSunk = () => {
    // hitShipsReg.some(
    //   (value) => value[value.length - 2] === value.length - 2
    // ) === true && sunkenShipsReg.some((value) => index === value[1]) === false
    // sunkenShipsReg.some((value) => {
    //   console.log("index:", index);
    //   console.log("value:", value);
    //   return index === value[1];
    // });
    // console.log("index:", index);
    // console.log(sunkenShipsReg);
    // if (index === "undefined") {
    //   return false;
    // }
    // if (
    //   hitShipsReg.some(
    //     (value) => value[value.length - 2] === value.length - 2
    //   ) === true &&
    //   sunkenShipsReg.some((value) => index === value[1]) === false
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
    let result = false;
    hitShipsReg.forEach((value) => {
      // console.log("value in hitshipreg:", value);
      // console.log("value[value.length - 2]:", value[value.length - 2]);
      // console.log("value.length - 2", value.length - 2);
      // value[value.length - 2] - indicates the length of the ship
      // value.length - 2 - indicates the number of hit squares
      if (value[value.length - 2] === value.length - 2) {
        if (!value.includes("Sunk")) {
          result = true;
          value.push("Sunk");
        }
      }
    });
    // console.log("result:", result);
    return result;
  };

  const recordHit = (index, coordinates) => {
    hitShipsReg.forEach((element) => {
      if (element[element.length - 1] === index) {
        element.unshift(coordinates);
      }
    });
  };

  const checkWinner = (sunkShips) => {
    if (sunkShips.length === 10) {
      return true;
    }
  };

  const receiveAttack = (coordinates) => {
    // console.log("hitShipsReg:", hitShipsReg);
    // const tempSunkArr = [...sunkenShipsReg];
    let sunkCheck = false;
    // console.log("chieck", tempSunkArr, sunkenShipsReg);
    shipsLocations.forEach((item, index) => {
      // console.log("isHit: ", isHit(item, coordinates));
      if (isHit(item, coordinates)) {
        // record hit ships
        recordHit(index, coordinates);
        hitShips.push(coordinates);
        // check if the ship is sunk
        if (
          // hitShipsReg.some((value) => value[value.length - 2] === value.length - 2)
          isSunk()
        ) {
          // sunkenShipsReg.some(value => index === value[1])
          // console.log(sunkenShipsReg.some((value) => index === value[1]));
          // check if I need to save index in the array
          sunkenShipsReg.push([item, index]);
          sunkCheck = true;
          // sunkShips.push(item);
          console.log("Sunk", sunkenShipsReg);
          // return "Sunk";
        }
        console.log("Hit", hitShipsReg);
        // return "Hit";
      }
    });
    // record missing shots
    if (
      !hitShipsReg.some(
        (value) =>
          value[0][0] === coordinates[0] && value[0][1] === coordinates[1]
      )
    ) {
      missedShots.push(coordinates);
      // console.log("Missed", missedShots);
      return "Missed";
    } else if (sunkCheck) {
      // console.log("Sunk", sunkenShipsReg);
      if (checkWinner(sunkenShipsReg)) {
        return "Winner";
      }
      return "Sunk";
    } else {
      // console.log("chieck", tempSunkArr, sunkenShipsReg);
      // console.log("Hit", hitShipsReg);
      return "Hit";
    }
  };
  return {
    createBoard,
    receiveAttack,
    shipsLocations,
    hitShipsReg,
    missedShots,
    sunkenShipsReg,
    hitShips,
    // sunkShips,
  };
};

// const gameboard1 = document.querySelector(".gameboard-1");
// gameboard1.addEventListener("click", (event) => {
//   const x = event.target.dataset.x;
//   const y = event.target.dataset.y;
//   const coordinates = [+x, +y];
//   console.log(coordinates);
// });

const Player = () => {
  // const getName = () => name;
  const placeShipsStatus = document.querySelector(".place-ships-status");
  const gameboard1 = document.querySelector(".gameboard-1");
  const boardCells1 = document.querySelectorAll(".board-cell-1");
  const placeShipBtn = document.querySelector(".place-ship");
  const cancelShipBtn = document.querySelector(".cancel-ship");
  const playerStatus = document.querySelector(".player-status");
  const confirmBtn = document.querySelector(".confirm-btn");
  const gameStatus = document.querySelector(".game-status");

  let myShips = [];

  // help-functions to createShips()
  const defineLength = (shipsArr) => {
    if (shipsArr.length < 1) {
      return 4;
    } else if (shipsArr.length >= 1 && shipsArr.length < 3) {
      return 3;
    } else if (shipsArr.length >= 3 && shipsArr.length < 6) {
      return 2;
    } else if (shipsArr.length >= 6 && shipsArr.length <= 10) {
      return 1;
    }
  };

  const checkLength = (firstSquare, length, dir) => {
    if (dir === "x") {
      switch (length) {
        case 4:
          return (
            firstSquare[0] + 3 > 9 ||
            firstSquare[0] + 2 > 9 ||
            firstSquare[0] + 1 > 9
          );
        case 3:
          return firstSquare[0] + 2 > 9 || firstSquare[0] + 1 > 9;
        case 2:
          return firstSquare[0] + 1 > 9;
        case 1:
          return false;
      }
    } else if (dir === "y") {
      switch (length) {
        case 4:
          return (
            firstSquare[1] + 3 > 9 ||
            firstSquare[1] + 2 > 9 ||
            firstSquare[1] + 1 > 9
          );
        case 3:
          return firstSquare[1] + 2 > 9 || firstSquare[1] + 1 > 9;
        case 2:
          return firstSquare[1] + 1 > 9;
        case 1:
          return false;
      }
    }
  };

  const placeGhostShip = (firstSquare, dir, length) => {
    const elArr = [];
    let tempArr = [];
    console.log("log", checkLength(firstSquare, length, dir)); // ? test this check before forEach loop
    if (checkLength(firstSquare, length, dir)) {
      return false;
    }
    if (dir === "x") {
      boardCells1.forEach((element) => {
        if (
          // checkLength(firstSquare, length, dir) ||
          element.classList.contains("ship")
        ) {
          return false;
        } else {
          // console.log("firstSquare", firstSquare);
          if (
            +element.dataset.x === firstSquare[0] &&
            +element.dataset.y === firstSquare[1]
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] + 1 &&
            +element.dataset.y === firstSquare[1]
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] + 2 &&
            +element.dataset.y === firstSquare[1]
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] + 3 &&
            +element.dataset.y === firstSquare[1]
          ) {
            elArr.push(element);
          }
        }
      });
    } else if (dir === "y") {
      boardCells1.forEach((element) => {
        if (
          checkLength(firstSquare, length, dir) ||
          element.classList.contains("ship")
        ) {
          return false;
        } else {
          if (
            +element.dataset.x === firstSquare[0] &&
            +element.dataset.y === firstSquare[1]
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] &&
            +element.dataset.y === firstSquare[1] + 1
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] &&
            +element.dataset.y === firstSquare[1] + 2
          ) {
            elArr.push(element);
          }
          if (
            +element.dataset.x === firstSquare[0] &&
            +element.dataset.y === firstSquare[1] + 3
          ) {
            elArr.push(element);
          }
        }
      });
    }
    // console.log("elArr", elArr);
    switch (length) {
      case 4:
        tempArr = [...elArr];
        break;
      case 3:
        tempArr = [elArr[0], elArr[1], elArr[2]];
        break;
      case 2:
        tempArr = [elArr[0], elArr[1]];
        break;
      case 1:
        tempArr = [elArr[0]];
        break;
    }

    tempArr.forEach((item) => item.classList.add("ghost-ship"));
    return tempArr;
  };

  // an array of nodes for the current ship
  let ship = [];
  // get tools for making a new ship
  const shipFactory = Ship();
  const shipsArr = shipFactory.shipSquares;
  const neighbourSquares = shipFactory.neighbourSquares;
  // default direction is on x axis
  let newShipDirection = "x";

  const handlePlaceShipBtn = () => {
    // if the first square wasn't chosen then nothing happens
    if (!ship.length) {
      return false;
    }
    console.log("pressed");
    const tempShipArr = [];
    let tempNeighbArr = [];
    // extract coordinates from nodes and push them to tempShipArr
    ship.forEach((item) => {
      const xItem = +item.dataset.x;
      const yItem = +item.dataset.y;
      tempShipArr.push([xItem, yItem]);
    });
    // calculate neighbour squares for the new ship
    tempNeighbArr = [
      ...shipFactory.calcNeighbourSquares(
        tempShipArr[0],
        tempShipArr.length,
        newShipDirection
      ),
    ];
    // check if the new ship overlapps other ships
    if (
      tempShipArr.some(
        (item) =>
          shipFactory.checkOverlapping(shipFactory.shipSquares, item) ||
          shipFactory.checkOverlapping(shipFactory.neighbourSquares, item)
      )
    ) {
      placeShipsStatus.innerText = "Cannot place ship here!";
      return false;
    } else {
      ship.forEach((item) => {
        item.classList.remove("ghost-ship");
        item.classList.add("ship");
      });
      shipsArr.push(tempShipArr);
      // myShips.push(tempShipArr);
      neighbourSquares.push(tempNeighbArr);
      const length = defineLength(shipsArr);
      placeShipsStatus.innerText = `Click on the first square of\n your ${length}-square ship.\nDouble click to change\n the direction.`;
    }
    // stop creating ships when all the ships are placed
    if (shipsArr.length === 10) {
      if (playerStatus.innerText === "Player-1 plays") {
        shipFactory.showShips().forEach((item) => myShips.push(item));
        gameStatus.innerText = "All ships are here.";
        placeShipsStatus.innerText =
          "All your ships are here!\n Press Confirm!";
        placeShipBtn.style.display = "none";
        cancelShipBtn.style.display = "none";
        confirmBtn.style.display = "flex";
      } else if (playerStatus.innerText === "Player-2 plays") {
        shipFactory.showShips().forEach((item) => myShips.push(item));
        gameStatus.innerText = "All ships are here.";
        placeShipsStatus.innerText =
          "All your ships are here!\n Press Confirm!";
        placeShipBtn.style.display = "none";
        cancelShipBtn.style.display = "none";
        confirmBtn.style.display = "flex";
        // placeShipsBtn.style.display = "none";
        // gameStatus.innerText = "Game on!";
        // hideShipsBtn.style.display = "flex";
        // showShipsBtn.style.display = "flex";
      }
    }
  };

  const handleGameboard1 = (event) => {
    if (
      event.target.classList.contains("outer-board-cell-x") ||
      event.target.classList.contains("outer-board-cell-y") ||
      gameStatus.innerText === "Game on!" ||
      gameStatus.innerText === "All ships are here."
    ) {
      return;
    }

    boardCells1.forEach((item) => {
      if (item.classList.contains("ghost-ship")) {
        item.classList.remove("ghost-ship");
      }
    });
    let firstSquare;
    // let ship = [];
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    firstSquare = [+x, +y];
    const length = defineLength(shipsArr);
    placeShipsStatus.innerText = `Click on the first square of\n your ${length}-square ship.\nDouble click to change\n the direction.`;
    // console.log("firstSquare:", firstSquare);
    // shade possible 4-square ship
    if (placeGhostShip(firstSquare, newShipDirection, length)) {
      ship = [...placeGhostShip(firstSquare, newShipDirection, length)];
    } else {
      return false;
    }
    // change ship's direction by with a double click
    event.target.addEventListener("click", () => {
      if (newShipDirection === "x") {
        newShipDirection = "y";
      } else if (newShipDirection === "y") {
        newShipDirection = "x";
      }
    });
  };

  const createShipsYourself = () => {
    // COMMENTED OUT TEMP //
    // an array of nodes for the current ship
    // let ship = [];
    // // get tools for making a new ship
    // const shipFactory = Ship();
    // const shipsArr = shipFactory.shipSquares;
    // const neighbourSquares = shipFactory.neighbourSquares;
    // // default direction is on x axis
    // let newShipDirection = "x";
    // COMMENTED OUT TEMP //

    // const randomShips = prompt(
    //   "Do you want to place ships automatically?",
    //   "yes"
    // );
    // if (randomShips === "yes") {
    // confirmBtn.style.display = "flex";
    // shipFactory.autoMakeShips();

    // shipFactory.shipSquares.forEach((item) => {
    //   item.forEach((value) => {
    //     boardCells1.forEach((element) => {
    //       if (
    //         +element.dataset.x === value[0] &&
    //         +element.dataset.y === value[1]
    //       ) {
    //         element.classList.add("ghost-ship");
    //       }
    //     });
    //   });
    // });
    // myShips = shipFactory.shipSquares;
    // } else {
    placeShipBtn.style.display = "flex";
    cancelShipBtn.style.display = "flex";
    placeShipsStatus.innerText = `Click on the first square of\n your 4-square ship.\nDouble click to change\n the direction.`;
    // console.log(
    //   "Let's create your ships.\nThe total amount of ships should be 10 ships.\nOne - 4-square ship.\nTwo - 3-square ships.\nThree - 2-square ships.\nFour - 1-square ships.\nWe will follow the above order to create your ships.\n We start with 4-square then 3-square etc."
    // );

    // const length = defineLength(shipsArr);

    // placeShipsStatus.innerText = `Click on the squares of\n your ${length}-square ship.\nStart with the first one.`;

    // commented out to test remove listener
    // placeShipBtn.addEventListener("click", () => {
    //   console.log("pressed");
    //   const tempShipArr = [];
    //   let tempNeighbArr = [];
    //   // extract coordinates from nodes and push them to tempShipArr
    //   ship.forEach((item) => {
    //     const xItem = +item.dataset.x;
    //     const yItem = +item.dataset.y;
    //     tempShipArr.push([xItem, yItem]);
    //   });
    //   // calculate neighbour squares for the new ship
    //   tempNeighbArr = [
    //     ...shipFactory.calcNeighbourSquares(
    //       tempShipArr[0],
    //       tempShipArr.length,
    //       newShipDirection
    //     ),
    //   ];
    //   // check if the new ship overlapps other ships
    //   if (
    //     tempShipArr.some(
    //       (item) =>
    //         shipFactory.checkOverlapping(shipFactory.shipSquares, item) ||
    //         shipFactory.checkOverlapping(shipFactory.neighbourSquares, item)
    //     )
    //   ) {
    //     placeShipsStatus.innerText = "Cannot place ship here!";
    //     return false;
    //   } else {
    //     ship.forEach((item) => {
    //       item.classList.remove("ghost-ship");
    //       item.classList.add("ship");
    //     });
    //     shipsArr.push(tempShipArr);
    //     // myShips.push(tempShipArr);
    //     neighbourSquares.push(tempNeighbArr);
    //   }
    //   // stop creating ships when all the ships are placed
    //   if (shipsArr.length === 10) {
    //     if (playerStatus.innerText === "Player-1 plays") {
    //       shipFactory.showShips().forEach((item) => myShips.push(item));
    //       gameStatus.innerText = "All ships are here.";
    //       placeShipsStatus.innerText =
    //         "All your ships are here!\n Press Confirm and change turn!";
    //       placeShipBtn.style.display = "none";
    //       cancelShipBtn.style.display = "none";
    //       confirmBtn.style.display = "flex";
    //     } else if (playerStatus.innerText === "Player-2 plays") {
    //       shipFactory.showShips().forEach((item) => myShips.push(item));
    //       gameStatus.innerText = "All ships are here.";
    //       placeShipsStatus.innerText =
    //         "All your ships are here!\n Press Confirm!";
    //       placeShipBtn.style.display = "none";
    //       cancelShipBtn.style.display = "none";
    //       confirmBtn.style.display = "flex";
    //       // placeShipsBtn.style.display = "none";
    //       // gameStatus.innerText = "Game on!";
    //       // hideShipsBtn.style.display = "flex";
    //       // showShipsBtn.style.display = "flex";
    //     }
    //   }

    //   // console.log("shipsArr", shipsArr);
    //   // console.log("neighbour squares", neighbourSquares);
    // });

    // gameboard1.addEventListener("click", (event) => {
    //   if (
    //     event.target.classList.contains("outer-board-cell-x") ||
    //     event.target.classList.contains("outer-board-cell-y") ||
    //     gameStatus.innerText === "Game on!" ||
    //     gameStatus.innerText === "All ships are here."
    //   ) {
    //     return;
    //   }

    //   boardCells1.forEach((item) => {
    //     if (item.classList.contains("ghost-ship")) {
    //       item.classList.remove("ghost-ship");
    //     }
    //   });
    //   let firstSquare;
    //   // let ship = [];
    //   const x = event.target.dataset.x;
    //   const y = event.target.dataset.y;
    //   firstSquare = [+x, +y];
    //   const length = defineLength(shipsArr);
    //   placeShipsStatus.innerText = `Click on the squares of\n your ${length}-square ship.\nStart with the first one.`;
    //   // console.log("firstSquare:", firstSquare);
    //   // shade possible 4-square ship
    //   ship = [...placeGhostShip(firstSquare, newShipDirection, length)];
    //   // change ship's direction by with a double click
    //   event.target.addEventListener("click", () => {
    //     if (newShipDirection === "x") {
    //       newShipDirection = "y";
    //     } else if (newShipDirection === "y") {
    //       newShipDirection = "x";
    //     }
    //   });
    // });

    placeShipBtn.addEventListener("click", handlePlaceShipBtn);
    gameboard1.addEventListener("click", handleGameboard1);
    // }

    // save all the created ships
    // shipFactory.showShips().forEach((item) => myShips.push(item));
  };

  const createShipsRandomly = () => {
    confirmBtn.style.display = "flex";
    shipFactory.autoMakeShips();

    shipFactory.shipSquares.forEach((item) => {
      item.forEach((value) => {
        boardCells1.forEach((element) => {
          if (
            +element.dataset.x === value[0] &&
            +element.dataset.y === value[1]
          ) {
            element.classList.add("ghost-ship");
          }
        });
      });
    });
    shipFactory.showShips().forEach((item) => myShips.push(item));
  };

  const removeEvents = () => {
    placeShipBtn.removeEventListener("click", handlePlaceShipBtn);
    gameboard1.removeEventListener("click", handleGameboard1);
  };

  return {
    // getName,
    createShipsYourself,
    createShipsRandomly,
    myShips,
    removeEvents,
  };
};

// DOM manipulaitons
// DONE!! // place ships on the board
// DONE!! // Make the second board
// DONE!! // add buttons Hide ships and Show ships - make them work
// DONE!! // Each player places ships
// Done!! // Players attack each other and record hits or missing shots
// DONE!! // show missed/hit/sunk shots on the second board
// FIXED!! // fix - all ships recorded as sunken after the first ship sunk
// FIXED!! // recieveAttack() only records missed shots and adds nothing to hit array although it registers a hit
// DONE!! // Display second board state according to player's turn - place ships according to theirs coordinates
// FIXED!! // probably a horizontal 2 square ship responce badly to attack, when hit one square all squares a red
// DONE!! // place sunken ships!!!
// DONE!! // Announce the winner
// DONE!! // Change turn automatically
// Place ships manually
const playerStatus = document.querySelector(".player-status");
const placeShipsStatus = document.querySelector(".place-ships-status");
const gameStatus = document.querySelector(".game-status");
const changeStatus = () => {
  if (playerStatus.innerText === "Player-1 plays") {
    // hideShips();
    playerStatus.innerText = "Player-2 plays";
  } else if (playerStatus.innerText === "Player-2 plays") {
    // hideShips();
    playerStatus.innerText = "Player-1 plays";
  }
};
const changeTurn = () => {
  changeStatus();
  hideShips();
  toggleSecondBoard();
  if (gameStatus.innerText === `Can't put more ships!`) {
    gameStatus.innerText = "Placing ships...";
  }
};
const placeShipBtn = document.querySelector(".place-ship");
const cancelShipBtn = document.querySelector(".cancel-ship");
const placeShipsYourselfBtn = document.querySelector(
  ".place-ships-yourself-btn"
);
const placeShipsRandomlyBtn = document.querySelector(
  ".place-ships-randomly-btn"
);
const confirmBtn = document.querySelector(".confirm-btn");
const boardCells1 = document.querySelectorAll(".board-cell-1");
const player1 = Player();
const player2 = Player();
const shipsIndex1 = [];
const shipsIndex2 = [];

// placing ships
placeShipsRandomlyBtn.addEventListener("click", () => {
  if (playerStatus.innerText === "Player-1 plays") {
    if (shipsIndex1.length) {
      gameStatus.innerText = `Can't put more ships!`;
      return;
    }
    placeShipsYourselfBtn.disabled = true;
    placeShipsRandomlyBtn.disabled = true;
    player1.createShipsRandomly();
  } else if (playerStatus.innerText === "Player-2 plays") {
    if (shipsIndex2.length) {
      gameStatus.innerText = `Can't put more ships!`;
      return;
    }
    gameStatus.innerText = "Placing ships...";
    placeShipsYourselfBtn.disabled = true;
    placeShipsRandomlyBtn.disabled = true;
    player2.createShipsRandomly();
  }
});
placeShipsYourselfBtn.addEventListener("click", () => {
  if (playerStatus.innerText === "Player-1 plays") {
    if (shipsIndex1.length) {
      gameStatus.innerText = `Can't put more ships!`;
      return;
    }

    placeShipsYourselfBtn.disabled = true;
    placeShipsRandomlyBtn.disabled = true;
    player1.createShipsYourself();
    // console.log("player1.myShips", player1.myShips);
    // ? add Confirm button to add indexes to the array
    // confirmBtn.addEventListener("click", () => {
    //   player1.myShips.forEach((item) => {
    //     item.forEach((value) => {
    //       boardCells1.forEach((element, index) => {
    //         if (
    //           +element.dataset.x === value[0] &&
    //           +element.dataset.y === value[1]
    //         ) {
    //           element.classList.add("ship");
    //           shipsIndex1.push(index);
    //         }
    //       });
    //     });
    //   });
    //   if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {
    //     placeShipsBtn.style.display = "none";
    //     gameStatus.innerText = "Game on!";
    //     placeShipBtn.style.display = "none";
    //     cancelShipBtn.style.display = "none";
    //     hideShipsBtn.style.display = "flex";
    //     showShipsBtn.style.display = "flex";
    //   }
    // });
    // below code moved to confirm btn
    // player1.myShips.forEach((item) => {
    //   item.forEach((value) => {
    //     boardCells1.forEach((element, index) => {
    //       if (
    //         +element.dataset.x === value[0] &&
    //         +element.dataset.y === value[1]
    //       ) {
    //         element.classList.add("ship");
    //         shipsIndex1.push(index);
    //       }
    //     });
    //   });
    // });
    // playerStatus.innerText = "Player-2 plays";
  } else if (playerStatus.innerText === "Player-2 plays") {
    if (shipsIndex2.length) {
      gameStatus.innerText = `Can't put more ships!`;
      return;
    }
    // if (gameStatus.innerText === `Can't put more ships!`) {
    //   gameStatus.innerText = "Placing ships...";
    // }
    // const player2 = Player();
    gameStatus.innerText = "Placing ships...";
    placeShipsYourselfBtn.disabled = true;
    placeShipsRandomlyBtn.disabled = true;
    player2.createShipsYourself();
    // const board2 = Gameboard(player2.myShips);
    // below code moved to confirm btn
    // player2.myShips.forEach((item) => {
    //   item.forEach((value) => {
    //     boardCells1.forEach((element, index) => {
    //       if (
    //         +element.dataset.x === value[0] &&
    //         +element.dataset.y === value[1]
    //       ) {
    //         element.classList.add("ship");
    //         shipsIndex2.push(index);
    //       }
    //     });
    //   });
    // });
  }
  // if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {
  //   // console.log("HERE!");
  //   placeShipsBtn.style.display = "none";
  //   gameStatus.innerText = "Game on!";
  //   placeShipBtn.style.display = "none";
  //   cancelShipBtn.style.display = "none";
  //   hideShipsBtn.style.display = "flex";
  //   showShipsBtn.style.display = "flex";
  // }
  // console.log(shipsIndex1);
});
confirmBtn.addEventListener("click", () => {
  if (playerStatus.innerText === "Player-1 plays") {
    player1.myShips.forEach((item) => {
      item.forEach((value) => {
        boardCells1.forEach((element, index) => {
          if (
            +element.dataset.x === value[0] &&
            +element.dataset.y === value[1]
          ) {
            element.classList.remove("ghost-ship");
            element.classList.add("ship");
            shipsIndex1.push(index);
          }
        });
      });
    });
    changeTurn();
    player1.removeEvents();
    confirmBtn.style.display = "none";
    placeShipsYourselfBtn.disabled = false;
    placeShipsRandomlyBtn.disabled = false;
    // console.log("shipsIndex1", shipsIndex1);
  } else if (playerStatus.innerText === "Player-2 plays") {
    player2.myShips.forEach((item) => {
      item.forEach((value) => {
        boardCells1.forEach((element, index) => {
          if (
            +element.dataset.x === value[0] &&
            +element.dataset.y === value[1]
          ) {
            element.classList.remove("ghost-ship");
            element.classList.add("ship");
            shipsIndex2.push(index);
          }
        });
      });
    });
    changeTurn();
    player2.removeEvents();
    confirmBtn.style.display = "none";
    // console.log("shipsIndex2", shipsIndex2);
  }
  if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {
    // console.log("HERE!");
    placeShipsYourselfBtn.style.display = "none";
    placeShipsRandomlyBtn.style.display = "none";
    gameStatus.innerText = "Game on!";
    placeShipBtn.style.display = "none";
    cancelShipBtn.style.display = "none";
    hideShipsBtn.style.display = "flex";
    showShipsBtn.style.display = "flex";
    placeShipsStatus.innerText = "";
  }
});

// toggle the second board
const toggleSecondBoard = () => {
  if (playerStatus.innerText === "Player-1 plays") {
    boardCells2.forEach((item) => {
      if (item.classList.contains("missed")) {
        item.classList.remove("missed");
      }
      if (item.classList.contains("hit")) {
        item.classList.remove("hit");
      }
      if (item.classList.contains("sunk")) {
        item.classList.remove("sunk");
      }
    });
    const missedShots = board2.missedShots;
    missedShots.forEach((value) => {
      boardCells2.forEach((item) => {
        if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
          item.classList.add("missed");
        }
      });
    });
    const hitShips = board2.hitShips;
    hitShips.forEach((value) => {
      boardCells2.forEach((item) => {
        if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
          item.classList.add("hit");
        }
      });
    });
    // console.log("real one", board2.sunkenShipsReg[0][0][0]);
    const sunkShips = board2.sunkenShipsReg;
    // console.log("sunken ships", sunkShips);
    sunkShips.forEach((value) => {
      // console.log("value:", value);
      value[0].forEach((element) => {
        // console.log("element:", element);
        boardCells2.forEach((item) => {
          if (
            +item.dataset.x === element[0] &&
            +item.dataset.y === element[1]
          ) {
            item.classList.add("sunk");
          }
        });
      });

      // boardCells2.forEach((item) => {
      //   if (
      //     +item.dataset.x === value[0][0][0] &&
      //     +item.dataset.y === value[0][0][1]
      //   ) {
      //     item.classList.add("sunk");
      //   }
      // });
    });
  } else if (playerStatus.innerText === "Player-2 plays") {
    boardCells2.forEach((item) => {
      if (item.classList.contains("missed")) {
        item.classList.remove("missed");
      }
      if (item.classList.contains("hit")) {
        item.classList.remove("hit");
      }
      if (item.classList.contains("sunk")) {
        item.classList.remove("sunk");
      }
    });
    const missedShots = board1.missedShots;
    missedShots.forEach((value) => {
      boardCells2.forEach((item) => {
        if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
          item.classList.add("missed");
        }
      });
    });
    const hitShips = board1.hitShips;
    hitShips.forEach((value) => {
      boardCells2.forEach((item) => {
        if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
          item.classList.add("hit");
        }
      });
    });

    const sunkShips = board1.sunkenShipsReg;
    // console.log("sunken ships", sunkShips);
    sunkShips.forEach((value) => {
      // console.log("value:", value);
      value[0].forEach((element) => {
        // console.log("element:", element);
        boardCells2.forEach((item) => {
          if (
            +item.dataset.x === element[0] &&
            +item.dataset.y === element[1]
          ) {
            item.classList.add("sunk");
          }
        });
      });
    });
    // const sunkShips = board1.sunkenShipsReg;
    // // console.log("sunken ships", board1.sunkenShipsReg);
    // sunkShips.forEach((value) => {
    //   boardCells2.forEach((item) => {
    //     if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
    //       item.classList.add("sunk");
    //     }
    //   });
    // });
  }
};

// hide ships
const hideShips = () => {
  boardCells1.forEach((item) => {
    if (item.classList.contains("ship")) {
      item.classList.remove("ship");
    }
  });
};
const hideShipsBtn = document.querySelector(".hide-ships");
hideShipsBtn.addEventListener("click", hideShips);
// show existing ships
const showShipsBtn = document.querySelector(".show-ships");
showShipsBtn.addEventListener("click", () => {
  if (playerStatus.innerText === "Player-1 plays") {
    shipsIndex1.forEach((item) => {
      boardCells1[item].classList.add("ship");
    });
  } else if (playerStatus.innerText === "Player-2 plays") {
    shipsIndex2.forEach((item) => {
      boardCells1[item].classList.add("ship");
    });
  }
});
// change turn
const changeTurnBtn = document.querySelector(".change-turn-btn");
changeTurnBtn.addEventListener("click", changeTurn);
// attack the opponent
const gameboard2 = document.querySelector(".gameboard-2");
const boardCells2 = document.querySelectorAll(".board-cell-2");
const board1 = Gameboard(player1.myShips);
const board2 = Gameboard(player2.myShips);

gameboard2.addEventListener("click", (event) => {
  if (
    gameStatus.innerText === "Placing ships..." ||
    event.target.classList.contains("outer-board-cell-x") ||
    event.target.classList.contains("outer-board-cell-y") ||
    event.target.classList.contains("missed") ||
    event.target.classList.contains("hit") ||
    event.target.classList.contains("sunk")
  ) {
    // console.log(event.target.classList);
    return;
  }
  const x = event.target.dataset.x;
  const y = event.target.dataset.y;
  const coordinates = [+x, +y];
  if (playerStatus.innerText === "Player-1 plays") {
    // console.log(board2.receiveAttack(coordinates));
    const attackStatus = board2.receiveAttack(coordinates);
    if (attackStatus === "Missed") {
      event.target.classList.add("missed");
      setTimeout(changeTurn, 300);
      // changeTurn();
    } else if (attackStatus === "Winner") {
      const sunkenShip =
        board2.sunkenShipsReg[board2.sunkenShipsReg.length - 1][0];
      sunkenShip.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("sunk");
          }
        });
      });
      playerStatus.innerText = "Player 1 Wins!";
    } else if (attackStatus === "Hit") {
      event.target.classList.add("hit");
    } else if (attackStatus === "Sunk") {
      const sunkenShip =
        board2.sunkenShipsReg[board2.sunkenShipsReg.length - 1][0];
      // console.log(
      //   "last sunk",
      //   board2.sunkenShipsReg[board2.sunkenShipsReg.length - 1][0]
      // );
      sunkenShip.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("sunk");
          }
        });
      });
      // event.target.classList.add("sunk");
    }
  } else if (playerStatus.innerText === "Player-2 plays") {
    // console.log(board1.receiveAttack(coordinates));
    const attackStatus = board1.receiveAttack(coordinates);
    if (attackStatus === "Missed") {
      event.target.classList.add("missed");
      setTimeout(changeTurn, 300);
      // changeTurn();
    } else if (attackStatus === "Winner") {
      const sunkenShip =
        board1.sunkenShipsReg[board1.sunkenShipsReg.length - 1][0];
      sunkenShip.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("sunk");
          }
        });
      });
      playerStatus.innerText = "Player 2 Wins!";
    } else if (attackStatus === "Hit") {
      event.target.classList.add("hit");
    } else if (attackStatus === "Sunk") {
      const sunkenShip =
        board1.sunkenShipsReg[board1.sunkenShipsReg.length - 1][0];
      // console.log(
      //   "last sunk",
      //   board1.sunkenShipsReg[board1.sunkenShipsReg.length - 1][0]
      // );
      sunkenShip.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("sunk");
          }
        });
      });
      // event.target.classList.add("sunk");
    }
  }
  // console.log(coordinates);
});

// create a player > create ships
// const player11 = Player("Joe");
// const player22 = Player("Ana");
// player1.createShips();
// const board11 = Gameboard(player11.myShips);
// console.log("Player1 ships", board11.shipsLocations);
// player2.createShips();
// const board22 = Gameboard(player22.myShips);
// console.log("Player2 ships", board22.shipsLocations);

// board1.receiveAttack([4, 0]);

// board2.receiveAttack([2, 4]);
// board1.receiveAttack([8, 7]);
// board2.receiveAttack([4, 2]);
// board1.receiveAttack([5, 0]);
// board2.receiveAttack([5, 0]);
// board1.receiveAttack([9, 9]);
// board2.receiveAttack([0, 0]);

// const ships = Ship();
// const shipsArr = ships.autoMakeShips();
// console.log(ships.shipSquares);
// ships.makeShip([1, 1], 4, "x");
// const board = Gameboard(shipsArr);
// console.log(board.showShips());

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

export { Ship, Gameboard };
