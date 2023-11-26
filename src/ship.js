/* eslint-disable no-plusplus */
/* eslint-disable default-case */
const Ship = () => {
  const shipSquares = [];
  const neighbourSquares = [];
  // auxiliary functions
  // check if a created ships overlaps existing ships
  const checkOverlapping = (shipArr, square) => {
    const result = [];
    if (shipArr.length === 0 || shipArr === undefined) {
      return false;
    }
    shipArr.forEach((item) => {
      result.push(
        item.some((value) => square[0] === value[0] && square[1] === value[1])
      );
    });
    return result.some((value) => value === true);
  };
  // calculate squares that are right next to a ship
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

  // ships building functions
  const make1sqShip = () => {
    if (shipSquares.length === 10) {
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
      } else {
        secondSquare = [x - 1, y];
        thirdSquare = [x - 2, y];
        fourthSquare = [x - 3, y];
        // calculate all the neighbour squares and push to subarray
        neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, "x"));
      }
    } else if (dirXY === 0) {
      // also check for coordinates to do not go over 9 or be less then 0
      if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {
        secondSquare = [x, y + 1];
        thirdSquare = [x, y + 2];
        fourthSquare = [x, y + 3];
        // calculate all the neighbour squares and push to subarray
        neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, "y"));
      } else {
        secondSquare = [x, y - 1];
        thirdSquare = [x, y - 2];
        fourthSquare = [x, y - 3];
        // calculate all the neighbour squares and push to subarray
        neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, "y"));
      }
    }
    // if some of the squares overlaps the previous ship - repeat from the beginning
    const ship = [];
    ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);
    if (
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

  // place all the ships automatically
  const autoMakeShips = () => {
    make4sqShip();
    make3sqShips();
    make2sqShip();
    return make1sqShip();
  };

  // show an array with created ships
  const showShips = () => shipSquares;

  return {
    autoMakeShips,
    showShips,
    shipSquares,
    neighbourSquares,
    checkOverlapping,
    calcNeighbourSquares,
  };
};

export default Ship;
