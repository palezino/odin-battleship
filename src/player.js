/* eslint-disable consistent-return */
/* eslint-disable default-case */
import Ship from "./ship";

const Player = () => {
  // const getName = () => name;
  const placeShipsStatus = document.querySelector(".place-ships-status");
  const gameboard1 = document.querySelector(".gameboard-1");
  const boardCells1 = document.querySelectorAll(".board-cell-1");
  const placeShipBtn = document.querySelector(".place-ship");
  // const cancelShipBtn = document.querySelector(".cancel-ship");
  const playerStatus = document.querySelector(".player-status");
  const confirmBtn = document.querySelector(".confirm-btn");
  const gameStatus = document.querySelector(".game-status");

  const myShips = [];

  // help-functions to createShips()
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
        }
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
  const { neighbourSquares } = shipFactory;
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
    }
    ship.forEach((item) => {
      item.classList.remove("ghost-ship");
      item.classList.add("ship");
    });
    shipsArr.push(tempShipArr);
    // myShips.push(tempShipArr);
    neighbourSquares.push(tempNeighbArr);
    const length = defineLength(shipsArr);
    placeShipsStatus.innerText = `Click on the first square of\n your ${length}-square ship.\nDouble click to change\n the direction.`;

    // stop creating ships when all the ships are placed
    if (shipsArr.length === 10) {
      if (playerStatus.innerText === "Player-1 plays") {
        shipFactory.showShips().forEach((item) => myShips.push(item));
        gameStatus.innerText = "All ships are here.";
        placeShipsStatus.innerText =
          "All your ships are here!\n Press Confirm!";
        placeShipBtn.style.display = "none";
        // cancelShipBtn.style.display = "none";
        confirmBtn.style.display = "flex";
      } else if (playerStatus.innerText === "Player-2 plays") {
        shipFactory.showShips().forEach((item) => myShips.push(item));
        gameStatus.innerText = "All ships are here.";
        placeShipsStatus.innerText =
          "All your ships are here!\n Press Confirm!";
        placeShipBtn.style.display = "none";
        // cancelShipBtn.style.display = "none";
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
    // let firstSquare;
    // let ship = [];
    const { x } = event.target.dataset;
    const { y } = event.target.dataset;
    const firstSquare = [+x, +y];
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
    // cancelShipBtn.style.display = "flex";
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
    // console.log("shipFactory.showShips()", shipFactory.showShips());
    shipFactory.showShips().forEach((item) => myShips.push(item));
    // console.log("myShips", myShips);
  };

  const removeEvents = () => {
    placeShipBtn.removeEventListener("click", handlePlaceShipBtn);
    gameboard1.removeEventListener("click", handleGameboard1);
  };

  return {
    // getName,
    handlePlaceShipBtn,
    createShipsYourself,
    createShipsRandomly,
    myShips,
    removeEvents,
  };
};

export default Player;
