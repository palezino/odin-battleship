/* eslint-disable consistent-return */
/* eslint-disable default-case */
import Ship from "./ship";

const Player = () => {
  const placeShipsStatus = document.querySelector(".place-ships-status");
  const gameboard1 = document.querySelector(".gameboard-1");
  const boardCells1 = document.querySelectorAll(".board-cell-1");
  const placeShipBtn = document.querySelector(".place-ship");
  const playerStatus = document.querySelector(".player-status");
  const confirmBtn = document.querySelector(".confirm-btn");
  const gameStatus = document.querySelector(".game-status");
  const myShips = [];

  // help-functions to createShips()
  // defines the length of the ship that will be created
  const defineLength = (shipsArr) => {
    if (shipsArr.length < 1) {
      return 4;
    }
    if (shipsArr.length >= 1 && shipsArr.length < 3) {
      return 3;
    }
    if (shipsArr.length >= 3 && shipsArr.length < 6) {
      return 2;
    }
    if (shipsArr.length >= 6 && shipsArr.length <= 10) {
      return 1;
    }
    return false;
  };
  // checks if the ships goes out of the board
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
  // places ghost ship during manual ships' placement
  const placeGhostShip = (firstSquare, dir, length) => {
    const elArr = [];
    let tempArr = [];
    if (checkLength(firstSquare, length, dir)) {
      return false;
    }
    if (dir === "x") {
      boardCells1.forEach((element) => {
        if (element.classList.contains("ship")) {
          return false;
        }
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
      });
    } else if (dir === "y") {
      boardCells1.forEach((element) => {
        if (
          checkLength(firstSquare, length, dir) ||
          element.classList.contains("ship")
        ) {
          return false;
        }
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
      });
    }
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
  const { neighbourSquares } = shipFactory;
  // default direction is on x axis
  let newShipDirection = "x";
  // handle a button that places the ship that was just created
  const handlePlaceShipBtn = () => {
    // if the first square wasn't chosen then nothing happens
    if (!ship.length) {
      return false;
    }
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
    }
    ship.forEach((item) => {
      item.classList.remove("ghost-ship");
      item.classList.add("ship");
    });
    shipsArr.push(tempShipArr);
    neighbourSquares.push(tempNeighbArr);
    const length = defineLength(shipsArr);
    if (placeShipsStatus !== null) {
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
        confirmBtn.style.display = "flex";
      } else if (playerStatus.innerText === "Player-2 plays") {
        shipFactory.showShips().forEach((item) => myShips.push(item));
        gameStatus.innerText = "All ships are here.";
        placeShipsStatus.innerText =
          "All your ships are here!\n Press Confirm!";
        placeShipBtn.style.display = "none";
        confirmBtn.style.display = "flex";
      }
    }
    return tempShipArr;
  };
  // handle gameboard 1 for manual ships placement
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
    const { x } = event.target.dataset;
    const { y } = event.target.dataset;
    const firstSquare = [+x, +y];
    const length = defineLength(shipsArr);
    placeShipsStatus.innerText = `Click on the first square of\n your ${length}-square ship.\nDouble click to change\n the direction.`;
    // shade possible
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
  // create ships manually
  const createShipsYourself = () => {
    placeShipBtn.style.display = "flex";
    placeShipsStatus.innerText = `Click on the first square of\n your 4-square ship.\nDouble click to change\n the direction.`;
    placeShipBtn.addEventListener("click", handlePlaceShipBtn);
    gameboard1.addEventListener("click", handleGameboard1);
  };
  // create ships randomly
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
  // remove events from "Place ship" button and gameboard1
  const removeEvents = () => {
    placeShipBtn.removeEventListener("click", handlePlaceShipBtn);
    gameboard1.removeEventListener("click", handleGameboard1);
  };

  return {
    ship,
    handlePlaceShipBtn,
    createShipsYourself,
    createShipsRandomly,
    myShips,
    removeEvents,
  };
};

export default Player;
