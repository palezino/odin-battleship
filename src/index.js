import Player from "./player";
import Game from "./game";

// place ships yourself
const placeShipBtn = document.querySelector(".place-ship");
const placeShipsYourselfBtn = document.querySelector(
  ".place-ships-yourself-btn"
);
placeShipBtn.addEventListener("click", Player().handlePlaceShipBtn);
placeShipsYourselfBtn.addEventListener("click", Game().handleManualPlacement);
// place ships randomly
const placeShipsRandomlyBtn = document.querySelector(
  ".place-ships-randomly-btn"
);
placeShipsRandomlyBtn.addEventListener("click", Game().handleRandomPlacement);
// confirm ships placement
const confirmBtn = document.querySelector(".confirm-btn");
confirmBtn.addEventListener("click", Game().handleConfirmPlacement);
// hide and show ships on your gameboard (ships are hidden by default)
const hideShipsBtn = document.querySelector(".hide-ships");
const showShipsBtn = document.querySelector(".show-ships");
hideShipsBtn.addEventListener("click", Game().hideShips);
showShipsBtn.addEventListener("click", Game().showShips);
// attack the opponent
const gameboard2 = document.querySelector(".gameboard-2");
gameboard2.addEventListener("click", Game().handleAttack);
// choose the game mode play with computer or play with a friend
const playWithComputerBtn = document.querySelector(".play-with-computer-btn");
const playWithFriendBtn = document.querySelector(".play-with-friend-btn");
playWithComputerBtn.addEventListener("click", Game().switchToPvC);
playWithFriendBtn.addEventListener("click", Game().switchToPvP);
