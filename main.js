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

eval("// create 4 one-square ships\n// 3 - two-square ships\n// 2 - three-square ships\n// 1 - four-square ship\n// check coordinates to be within the gameboard\n\nconst Ship = (coordinates) => {\n  let shipLength = coordinates.length;\n  const location = [...coordinates];\n  // check if a ship is on the board\n  const isOnTheBoard = () =>\n    coordinates.every((item) => {\n      if (item[0] >= 0 && item[1] >= 0 && item[0] <= 9 && item[1] <= 9) {\n        return true;\n      }\n    });\n\n  // cb functions for checkCoordinates()\n  const sameXcb = (value, index, array) => {\n    console.log(value);\n    if (\n      array[index + 1] === undefined ||\n      Math.abs(value[1] - array[index + 1][1]) === 1\n    ) {\n      return true;\n    }\n  };\n  const sameYcb = (value, index, array) => {\n    console.log(value);\n    if (\n      array[index + 1] === undefined ||\n      Math.abs(value[0] - array[index + 1][0]) === 1\n    ) {\n      return true;\n    }\n  };\n\n  const checkCoordinates = () => {\n    /*  \n    coordinates: if x is the same then y can only differ by 1\n                 if y is the same then x can only differ by 1\n    */\n    if (coordinates.length === 1) {\n      return true;\n    }\n    // if x is the same....\n    if (coordinates[0][0] === coordinates[1][0]) {\n      return coordinates.every(sameXcb);\n    }\n    // if y is the same...\n    if (coordinates[0][1] === coordinates[1][1]) {\n      return coordinates.every(sameYcb);\n    }\n    return false;\n  };\n\n  const isSunk = () => console.log(\"Ship is sunk!\");\n\n  const wasHit = () => {\n    console.log(shipLength);\n    shipLength -= 1;\n    if (shipLength === 0) {\n      isSunk();\n    }\n  };\n\n  return { location, wasHit, checkCoordinates, isOnTheBoard };\n};\n\n// gameboard will take ships locations as an array\nconst Gameboard = (ship) => {\n  const shipsLocations = [];\n  const missedShots = [];\n  const sunkenShips = [];\n\n  // gameboard should have two coordinates X and Y which are represented by numbers\n  // from 0 to 9, and look like [0,0], [0,1]... next line [1,0], [1,1]...\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    return board;\n  };\n  const receiveAttack = (coordinates) => {\n    // if coordinates in the shipsLocations - mark as hit\n    // else add it to missedShots\n    // if ship is destroyed add it to sunken ships\n  };\n  return { createBoard, shipsLocations };\n};\n\nconst ship1 = Ship([\n  [2, 2],\n  [1, 2],\n]);\nconst ship2 = Ship([\n  [2, 5],\n  [2, 6],\n  [2, 7],\n]);\n\nconsole.log(ship1.isOnTheBoard());\n// ship1.wasHit();\n// ship1.wasHit();\n\n// const board = Gameboard(ship1);\n// console.log(board.shipsLocations);\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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