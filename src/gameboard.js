/* eslint-disable no-plusplus */
const Gameboard = (shipsArr) => {
  const shipsLocations = shipsArr;
  const hitShips = [];
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

  // takes ship coordinates, and hit coordinates, and returns true if the ship was hit
  const isHit = (ship, coordinates) =>
    ship.some(
      (value) => value[0] === coordinates[0] && value[1] === coordinates[1]
    );
  // return true if the ship sunk
  const isSunk = () => {
    let result = false;
    hitShipsReg.forEach((value) => {
      if (value[value.length - 2] === value.length - 2) {
        if (!value.includes("Sunk")) {
          result = true;
          value.push("Sunk");
        }
      }
    });
    return result;
  };
  // records hit ships
  const recordHit = (index, coordinates) => {
    hitShipsReg.forEach((element) => {
      if (element[element.length - 1] === index) {
        element.unshift(coordinates);
      }
    });
  };
  // check if all the ships were sunken
  const checkWinner = (sunkShips) => {
    if (sunkShips.length === 10) {
      return true;
    }
    return false;
  };
  // handles attack and return "Missed", "Hit", "Sunk", or "Winner"
  const receiveAttack = (coordinates) => {
    let sunkCheck = false;
    shipsLocations.forEach((item, index) => {
      if (isHit(item, coordinates)) {
        // record hit ships
        recordHit(index, coordinates);
        hitShips.push(coordinates);
        // check if the ship is sunk
        if (isSunk()) {
          sunkenShipsReg.push([item, index]);
          sunkCheck = true;
        }
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
      return "Missed";
      // eslint-disable-next-line no-else-return
    } else if (sunkCheck) {
      if (checkWinner(sunkenShipsReg)) {
        return "Winner";
      }
      return "Sunk";
    } else {
      return "Hit";
    }
  };
  return {
    receiveAttack,
    shipsLocations,
    hitShipsReg,
    missedShots,
    sunkenShipsReg,
    hitShips,
  };
};

export default Gameboard;
