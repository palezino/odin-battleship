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

eval("/* eslint-disable array-callback-return */\n/* eslint-disable consistent-return */\n/* eslint-disable no-plusplus */\n// create 4 one-square ships\n// 3 - two-square ships\n// 2 - three-square ships\n// 1 - four-square ship\n\nconst Ship = (coordinates) => {\n  let shipLength = coordinates.length;\n  const location = [...coordinates];\n  // check if a ship is on the board\n  const isOnTheBoard = () =>\n    coordinates.every((item) => {\n      if (item[0] >= 0 && item[1] >= 0 && item[0] <= 9 && item[1] <= 9) {\n        return true;\n      }\n    });\n\n  // cb functions for checkCoordinates()\n  const sameXcb = (value, index, array) => {\n    console.log(value);\n    if (\n      array[index + 1] === undefined ||\n      Math.abs(value[1] - array[index + 1][1]) === 1\n    ) {\n      return true;\n    }\n  };\n  const sameYcb = (value, index, array) => {\n    console.log(value);\n    if (\n      array[index + 1] === undefined ||\n      Math.abs(value[0] - array[index + 1][0]) === 1\n    ) {\n      return true;\n    }\n  };\n\n  const checkCoordinates = () => {\n    /*  \n    coordinates: if x is the same then y can only differ by 1\n                 if y is the same then x can only differ by 1\n    */\n    if (coordinates.length === 1) {\n      return true;\n    }\n    // if x is the same....\n    if (coordinates[0][0] === coordinates[1][0]) {\n      return coordinates.every(sameXcb);\n    }\n    // if y is the same...\n    if (coordinates[0][1] === coordinates[1][1]) {\n      return coordinates.every(sameYcb);\n    }\n    return false;\n  };\n\n  const isSunk = () => console.log(\"Ship is sunk!\");\n\n  const wasHit = () => {\n    console.log(shipLength);\n    shipLength -= 1;\n    if (shipLength === 0) {\n      isSunk();\n    }\n  };\n\n  return { location, wasHit, checkCoordinates, isOnTheBoard };\n};\n\n// gameboard will take ships locations as an array\nconst Gameboard = () => {\n  const shipsLocations = [];\n  // const missedShots = [];\n  // const sunkenShips = [];\n\n  // gameboard should have two coordinates X and Y which are represented by numbers\n  // from 0 to 9, and look like [0,0], [0,1]... next line [1,0], [1,1]...\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    return board;\n  };\n  // put the ships on the board (in random places)\n  const put1squareShips = () => {\n    // 4 x 1-square ships\n    const ship1square = [];\n    for (let i = 0; i < 4; i++) {\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstScquare = [x, y];\n      ship1square.push(firstScquare);\n    }\n    return ship1square;\n  };\n  const put3squareShips = () => {\n    // 3-square ships x 2\n    // next checks should be applied to the firstSquare\n    // check for coordinates to do not go over 9 and less then 0\n    // check for ships to not cross each others\n    const ship3squares = [];\n    for (let i = 0; i < 2; i++) {\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstScquare = [x, y];\n      let secondSquare;\n      let thirdSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        if ((dirPlusMinus && firstScquare[0] < 2) || firstScquare[0] < 8) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n        }\n        ship3squares.push(firstScquare, secondSquare, thirdSquare);\n      } else {\n        if ((dirPlusMinus && firstScquare[1] < 2) || firstScquare[1] < 8) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n        }\n        ship3squares.push(firstScquare, secondSquare, thirdSquare);\n      }\n    }\n    console.log(ship3squares);\n  };\n  // const receiveAttack = (coordinates) => {\n  // if coordinates in the shipsLocations - mark as hit\n  // else add it to missedShots\n  // if ship is destroyed add it to sunken ships\n  // };\n  return { createBoard, shipsLocations, put1squareShips, put3squareShips };\n};\n\n// const ship1 = Ship([\n//   [2, 2],\n//   [1, 2],\n// ]);\n// const ship2 = Ship([\n//   [2, 5],\n//   [2, 6],\n//   [2, 7],\n// ]);\n\nconst board = Gameboard();\n\nboard.put3squareShips();\n// ship1.wasHit();\n// ship1.wasHit();\n\n// const board = Gameboard(ship1);\n// console.log(board.shipsLocations);\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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