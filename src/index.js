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

  const checkOverlapping = (shipArr, square) => {
    const result = [];
    if (shipArr.length === 0) {
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
          // calculate all the neighbour squares and push to subarray
          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, "y"));
        }
      }
      // if some of the squares overlaps the previous ship - repeat from the beginning
      const ship = [];
      ship.push(firstSquare, secondSquare, thirdSquare);
      // console.log(ship);
      // console.log(
      //   ship.some(
      //     (item) =>
      //       checkOverlapping(shipSquares, item) ||
      //       checkOverlapping(neighbourSquares, item)
      //   )
      // );
      if (
        ship.some(
          (item) =>
            checkOverlapping(shipSquares, item) ||
            checkOverlapping(neighbourSquares, item)
        )
      ) {
        // console.log("Ship squares:");
        // console.log(shipSquares);
        // console.log("Neigbour squares:");
        // console.log(neighbourSquares);
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

  // make ships manually
  const makeShip = (firstSquare, length, dir = "x") => {
    if (shipSquares.length === 10) {
      console.log("Can't create any more ships!");
      return false;
    }
    // console.log("Ship length", checkShipsNum(length));
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

  return { autoMakeShips, makeShip, showShips, shipSquares };
};

// gameboard will take ships locations as an array
const Gameboard = (shipsArr) => {
  const shipsLocations = shipsArr;
  const hitShips = [];
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

  // const showShips = () => shipsLocations;
  // const arrangeShips = () => {
  //   const arr = [];
  //   shipsLocations.forEach((item, index) => {
  //     arr.push([item.length, index]);
  //   });
  //   // console.log(arr);
  //   return arr;
  // };

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
      console.log("value in hitshipreg:", value);
      console.log("value[value.length - 2]:", value[value.length - 2]);
      console.log("value.length - 2", value.length - 2);
      if (value[value.length - 2] === value.length - 2) {
        if (!value.includes("Sunk")) {
          result = true;
          value.push("Sunk");
        }
      }
    });
    console.log("result:", result);
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
      // how to check if sunk?
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

const Player = () => {
  // const getName = () => name;
  const myShips = [];

  // help-function to createShips()
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

  const createShips = () => {
    // the execution will follow the following steps:
    // - explain that we start with one 4-squares ship, the two 3-squares ship etc.
    // - input (or choose on the board) the start point of the ship
    // - choose a direction
    // - display all the problems if the ship's location is not correct (overlapping, going off the board)
    // - place a ship

    const shipFactory = Ship();
    const shipsArr = shipFactory.shipSquares;
    const randomShips = prompt(
      "Do you want to place ships automatically?",
      "yes"
    );
    if (randomShips === "yes") {
      shipFactory.autoMakeShips();
      // console.log(shipFactory.showShips());
    } else {
      console.log(
        "Let's create your ships.\nThe total amount of ships should be 10 ships.\nOne - 4-square ship.\nTwo - 3-square ships.\nThree - 2-square ships.\nFour - 1-square ships.\nWe will follow the above order to create your ships.\n We start with 4-square then 3-square etc."
      );
      while (shipsArr.length < 10) {
        const length = defineLength(shipsArr);
        let firstSquare = prompt(
          `Please, choose the first square of your ${length}-square ship`,
          "[0,0]"
        );
        firstSquare = [+firstSquare[1], +firstSquare[3]];
        let dir;
        if (length !== 1) {
          dir = prompt(
            "Choose the direction",
            "print x(across) or y(down)"
          ).toLowerCase();
        } else {
          dir = "x";
        }
        if (shipFactory.makeShip(firstSquare, length, dir)) {
          console.log("Done!");
          console.log(shipFactory.showShips());
        } else {
          console.log("Please, try to change coordinates!");
        }
      }
      console.log(shipFactory.showShips());
    }
    // save all the created ships
    shipFactory.showShips().forEach((item) => myShips.push(item));
  };

  return {
    // getName,
    createShips,
    myShips,
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
//
// Place ships manually
const playerStatus = document.querySelector(".player-status");
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
const placeShipsBtn = document.querySelector(".place-ships-btn");
const boardCells1 = document.querySelectorAll(".board-cell-1");
const player1 = Player();
const player2 = Player();
const shipsIndex1 = [];
const shipsIndex2 = [];

// console.log(playerStatus.innerText[0]);
placeShipsBtn.addEventListener("click", () => {
  if (playerStatus.innerText === "Player-1 plays") {
    if (shipsIndex1.length) {
      gameStatus.innerText = `Can't put more ships!`;
      return;
    }
    // if (gameStatus.innerText === `Can't put more ships!`) {
    //   gameStatus.innerText = "Placing ships...";
    // }
    // const player1 = Player();
    player1.createShips();
    // const board1 = Gameboard(player1.myShips);
    player1.myShips.forEach((item) => {
      item.forEach((value) => {
        boardCells1.forEach((element, index) => {
          if (
            +element.dataset.x === value[0] &&
            +element.dataset.y === value[1]
          ) {
            element.classList.add("ship");
            shipsIndex1.push(index);
          }
        });
      });
    });
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
    player2.createShips();
    // const board2 = Gameboard(player2.myShips);
    player2.myShips.forEach((item) => {
      item.forEach((value) => {
        boardCells1.forEach((element, index) => {
          if (
            +element.dataset.x === value[0] &&
            +element.dataset.y === value[1]
          ) {
            element.classList.add("ship");
            shipsIndex2.push(index);
          }
        });
      });
    });
  }
  if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {
    placeShipsBtn.style.display = "none";
    gameStatus.innerText = "Game on!";
  }
  // console.log(shipsIndex1);
});

// toggle the ssecond board
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
    event.target.classList.contains("outer-board-cell-y")
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
      changeTurn();
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
      changeTurn();
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
