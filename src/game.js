import Gameboard from "./gameboard";
import Player from "./player";

const player1 = Player();
const player2 = Player();
const shipsIndex1 = [];
const shipsIndex2 = [];
const board1 = Gameboard(player1.myShips);
const board2 = Gameboard(player2.myShips);

const Game = () => {
  // call for all the necessary selectors from DOM
  const playerStatus = document.querySelector(".player-status");
  const placeShipsStatus = document.querySelector(".place-ships-status");
  const gameStatus = document.querySelector(".game-status");
  const gameMode = document.querySelector(".game-mode");
  const boardCells1 = document.querySelectorAll(".board-cell-1");
  const boardCells2 = document.querySelectorAll(".board-cell-2");
  const placeShipsYourselfBtn = document.querySelector(
    ".place-ships-yourself-btn"
  );
  const placeShipsRandomlyBtn = document.querySelector(
    ".place-ships-randomly-btn"
  );
  const confirmBtn = document.querySelector(".confirm-btn");
  const placeShipBtn = document.querySelector(".place-ship");
  const hideShipsBtn = document.querySelector(".hide-ships");
  const showShipsBtn = document.querySelector(".show-ships");
  const playWithComputerBtn = document.querySelector(".play-with-computer-btn");
  const playWithFriendBtn = document.querySelector(".play-with-friend-btn");

  // toggle the status of a current turn
  const changeStatus = () => {
    if (gameMode.innerText === "PvC") {
      if (playerStatus.innerText === "Player-1 plays") {
        playerStatus.innerText = "Computer plays";
      } else if (playerStatus.innerText === "Computer plays") {
        playerStatus.innerText = "Player-1 plays";
      }
    } else if (gameMode.innerText === "PvP") {
      if (playerStatus.innerText === "Player-1 plays") {
        playerStatus.innerText = "Player-2 plays";
      } else if (playerStatus.innerText === "Player-2 plays") {
        playerStatus.innerText = "Player-1 plays";
      }
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
  // show ships
  const showShips = () => {
    if (playerStatus.innerText === "Player-1 plays") {
      shipsIndex1.forEach((item) => {
        boardCells1[item].classList.add("ship");
      });
    } else if (playerStatus.innerText === "Player-2 plays") {
      shipsIndex2.forEach((item) => {
        boardCells1[item].classList.add("ship");
      });
    }
  };
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
      // line below changed to Destructuring assignement
      // const missedShots = board2.missedShots;
      const { missedShots } = board2;
      missedShots.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("missed");
          }
        });
      });
      const { hitShips } = board2;
      hitShips.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("hit");
          }
        });
      });
      const sunkShips = board2.sunkenShipsReg;
      sunkShips.forEach((value) => {
        value[0].forEach((element) => {
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
    } else if (
      playerStatus.innerText === "Player-2 plays" ||
      playerStatus.innerText === "Computer plays"
    ) {
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
      const { missedShots } = board1;
      missedShots.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("missed");
          }
        });
      });
      const { hitShips } = board1;
      hitShips.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("hit");
          }
        });
      });

      const sunkShips = board1.sunkenShipsReg;
      sunkShips.forEach((value) => {
        value[0].forEach((element) => {
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
    }
  };
  // change the player's turn
  const changeTurn = () => {
    changeStatus();
    hideShips();
    toggleSecondBoard();
    if (gameStatus.innerText === `Can't put more ships!`) {
      gameStatus.innerText = "Placing ships...";
    }
  };
  // handle the button for random placement of ships
  const handleRandomPlacement = () => {
    if (playerStatus.innerText === "Player-1 plays") {
      placeShipsYourselfBtn.disabled = true;
      placeShipsRandomlyBtn.disabled = true;
      player1.createShipsRandomly();
    } else if (playerStatus.innerText === "Player-2 plays") {
      gameStatus.innerText = "Placing ships...";
      placeShipsYourselfBtn.disabled = true;
      placeShipsRandomlyBtn.disabled = true;
      player2.createShipsRandomly();
    }
  };
  // handle the button for manual placement of ships
  const handleManualPlacement = () => {
    if (playerStatus.innerText === "Player-1 plays") {
      placeShipsYourselfBtn.disabled = true;
      placeShipsRandomlyBtn.disabled = true;
      placeShipsStatus.style.padding = "1rem 0";
      player1.createShipsYourself();
    } else if (playerStatus.innerText === "Player-2 plays") {
      gameStatus.innerText = "Placing ships...";
      placeShipsYourselfBtn.disabled = true;
      placeShipsRandomlyBtn.disabled = true;
      player2.createShipsYourself();
    }
  };
  // handle the button the confirms the placement of all ships
  const handleConfirmPlacement = () => {
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
      // for PvC mode
      if (gameMode.innerText === "PvC") {
        player1.removeEvents();
        confirmBtn.style.display = "none";
        player2.createShipsRandomly();
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
        placeShipsYourselfBtn.style.display = "none";
        placeShipsRandomlyBtn.style.display = "none";
        gameStatus.innerText = "Game on!";
        placeShipBtn.style.display = "none";
        hideShipsBtn.style.display = "flex";
        showShipsBtn.style.display = "flex";
        placeShipsStatus.innerText = "";
        placeShipsStatus.style.padding = "0";
        changeTurn();
      }
      changeTurn();
      player1.removeEvents();
      confirmBtn.style.display = "none";
      placeShipsYourselfBtn.disabled = false;
      placeShipsRandomlyBtn.disabled = false;
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
    }
    if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {
      placeShipsYourselfBtn.style.display = "none";
      placeShipsRandomlyBtn.style.display = "none";
      gameStatus.innerText = "Game on!";
      placeShipBtn.style.display = "none";
      hideShipsBtn.style.display = "flex";
      showShipsBtn.style.display = "flex";
      placeShipsStatus.innerText = "";
      placeShipsStatus.style.padding = "0";
    }
  };
  // PC attack function
  const attackFromPC = (newCoordinates = null) => {
    // for PvC mode
    if (gameMode.innerText === "PvC") {
      if (
        newCoordinates === null ||
        newCoordinates[0] > 9 ||
        newCoordinates[0] < 0 ||
        newCoordinates[1] > 9 ||
        newCoordinates[1] < 0
      ) {
        // eslint-disable-next-line no-param-reassign
        newCoordinates = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
      }
      const newAttackStatus = board1.receiveAttack(newCoordinates);
      if (newAttackStatus === "Missed") {
        boardCells2.forEach((element) => {
          if (
            +element.dataset.x === newCoordinates[0] &&
            +element.dataset.y === newCoordinates[1]
          ) {
            if (
              element.classList.contains("missed") ||
              element.classList.contains("sunk") ||
              element.classList.contains("hit")
            ) {
              attackFromPC();
            } else {
              element.classList.add("missed");
              setTimeout(changeTurn, 500);
            }
          }
        });
      } else if (newAttackStatus === "Winner") {
        const sunkenShip =
          board1.sunkenShipsReg[board1.sunkenShipsReg.length - 1][0];
        sunkenShip.forEach((value) => {
          boardCells2.forEach((item) => {
            if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
              item.classList.add("sunk");
            }
          });
        });
        playerStatus.innerText = "Computer Wins!";
      } else if (newAttackStatus === "Hit") {
        boardCells2.forEach((element) => {
          if (
            +element.dataset.x === newCoordinates[0] &&
            +element.dataset.y === newCoordinates[1]
          ) {
            if (
              element.classList.contains("hit") ||
              element.classList.contains("sunk") ||
              element.classList.contains("missed")
            ) {
              attackFromPC();
            } else {
              element.classList.add("hit");
              const tempArr = [
                [newCoordinates[0] + 1, newCoordinates[1]],
                [newCoordinates[0] - 1, newCoordinates[1]],
                [newCoordinates[0], newCoordinates[1] + 1],
                [newCoordinates[0], newCoordinates[1] - 1],
              ];
              const neighbourSquare =
                tempArr[Math.floor(Math.random() * tempArr.length)];
              setTimeout(() => {
                attackFromPC(neighbourSquare);
              }, 500);
            }
          }
        });
      } else if (newAttackStatus === "Sunk") {
        const sunkenShip =
          board1.sunkenShipsReg[board1.sunkenShipsReg.length - 1][0];
        sunkenShip.forEach((value) => {
          boardCells2.forEach((item) => {
            if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
              item.classList.add("sunk");
            }
          });
        });
        setTimeout(attackFromPC, 500);
      }
    }
  };
  // mark attacks on the second gameboard
  const markAttacks = (event, board, attackStatus) => {
    if (attackStatus === "Missed") {
      event.target.classList.add("missed");
      if (gameMode.innerText === "PvC") {
        setTimeout(changeTurn, 300);
        setTimeout(attackFromPC, 500);
      } else {
        setTimeout(changeTurn, 300);
      }
    } else if (attackStatus === "Winner") {
      const sunkenShip =
        board.sunkenShipsReg[board.sunkenShipsReg.length - 1][0];
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
        board.sunkenShipsReg[board.sunkenShipsReg.length - 1][0];
      sunkenShip.forEach((value) => {
        boardCells2.forEach((item) => {
          if (+item.dataset.x === value[0] && +item.dataset.y === value[1]) {
            item.classList.add("sunk");
          }
        });
      });
    }
  };
  // handle attacks made by human players
  const handleAttack = (event) => {
    if (
      gameStatus.innerText === "Placing ships..." ||
      event.target.classList.contains("outer-board-cell-x") ||
      event.target.classList.contains("outer-board-cell-y") ||
      event.target.classList.contains("missed") ||
      event.target.classList.contains("hit") ||
      event.target.classList.contains("sunk")
    ) {
      return;
    }
    const { x } = event.target.dataset;
    const { y } = event.target.dataset;
    const coordinates = [+x, +y];
    if (playerStatus.innerText === "Player-1 plays") {
      const attackStatus = board2.receiveAttack(coordinates);
      markAttacks(event, board2, attackStatus);
    } else if (playerStatus.innerText === "Player-2 plays") {
      const attackStatus = board1.receiveAttack(coordinates);
      markAttacks(event, board1, attackStatus);
    }
  };
  // set the PvC mode
  const switchToPvC = () => {
    gameMode.innerText = "PvC";
    placeShipsRandomlyBtn.style.display = "flex";
    placeShipsYourselfBtn.style.display = "flex";
    playWithFriendBtn.style.display = "none";
    playWithComputerBtn.style.display = "none";
  };
  // set the PvP mode
  const switchToPvP = () => {
    gameMode.innerText = "PvP";
    placeShipsRandomlyBtn.style.display = "flex";
    placeShipsYourselfBtn.style.display = "flex";
    playWithFriendBtn.style.display = "none";
    playWithComputerBtn.style.display = "none";
  };
  return {
    hideShips,
    showShips,
    handleRandomPlacement,
    handleManualPlacement,
    handleConfirmPlacement,
    handleAttack,
    switchToPvC,
    switchToPvP,
  };
};

export default Game;
