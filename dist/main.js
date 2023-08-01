/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"so it begins...\");\n\nconst Ship = (coordinates) => {\n  let shipLength = coordinates.length;\n  const location = [...coordinates];\n\n  const isSunk = () => console.log(\"Ship is sunk!\");\n\n  const wasHit = () => {\n    console.log(shipLength);\n    shipLength -= 1;\n    if (shipLength === 0) {\n      isSunk();\n    }\n  };\n\n  return { location, wasHit };\n};\n\nconst ship1 = Ship([\n  [2, 2],\n  [2, 3],\n]);\nconst ship2 = Ship([\n  [2, 5],\n  [2, 6],\n  [2, 7],\n]);\n\nconsole.log(ship1);\nship1.wasHit();\nship1.wasHit();\n\nconst Gameboard = (ship) => {\n  const shipsLocations = [];\n  const missedShots = [];\n  const sunkenShips = [];\n  // gameboard should have two coordinates X and Y which are represented by numbers\n  // from 0 to 9, and look like [0,0], [0,1]... next line [1,0], [1,1]...\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    return board;\n  };\n  const receiveAttack = (coordinates) => {\n    // if coordinates in the shipsLocations - mark as hit\n    // else add it to missedShots\n    // if ship is destroyed add it to sunken ships\n  };\n  return { createBoard };\n};\n\n// const board = Gameboard();\n// console.log(board.createBoard());\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;