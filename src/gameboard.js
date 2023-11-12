/* eslint-disable no-plusplus */
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
    return false;
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
      // eslint-disable-next-line no-else-return
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

export default Gameboard;
