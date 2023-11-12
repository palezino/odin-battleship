/* eslint-disable no-plusplus */
/* eslint-disable default-case */
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
    }
    // console.log(square);
    shipArr.forEach((item) => {
      result.push(
        item.some((value) => square[0] === value[0] && square[1] === value[1])
      );
    });

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
    }
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
      // eslint-disable-next-line no-else-return
    } else {
      shipSquares.push([firstSquare]);
      return make1sqShip();
    }
  };

  const make2sqShip = () => {
    if (shipSquares.length === 6) {
      return shipSquares;
    }
    // define x,y and the first square of the ship
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const firstSquare = [x, y];
    // define the second
    let secondSquare;
    // randomly choose the direction
    const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y
    const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus
    if (dirXY === 1) {
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
    } else if (dirXY === 0) {
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
      // eslint-disable-next-line no-else-return
    } else {
      shipSquares.push([firstSquare, secondSquare]);
      return make2sqShip();
    }
  };

  const make3sqShips = () => {
    if (shipSquares.length === 3) {
      return shipSquares;
    }
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
    if (dirXY === 1) {
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
    } else if (dirXY === 0) {
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
      // eslint-disable-next-line no-else-return
    } else {
      shipSquares.push([firstSquare, secondSquare, thirdSquare]);
      return make3sqShips();
    }
  };

  const make4sqShip = () => {
    if (shipSquares.length === 1) {
      // console.log("Ship squares:");
      // console.log(shipSquares);
      // console.log("Neigbour squares:");
      // console.log(neighbourSquares);
      return shipSquares;
    }
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
    if (dirXY === 1) {
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
    } else if (dirXY === 0) {
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
      // eslint-disable-next-line no-else-return
    } else {
      shipSquares.push([firstSquare, secondSquare, thirdSquare, fourthSquare]);
      return make4sqShip();
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
      // eslint-disable-next-line no-else-return
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

export default Ship;
