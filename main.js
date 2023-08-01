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

eval("console.log(\"so it begins...\");\n\nconst Ship = (length) => {\n  let shipLength = length;\n\n  const wasHit = () => {\n    shipLength -= 1;\n  };\n\n  const isSunk = () => {\n    if (shipLength === 0) {\n      return console.log(\"Ship is sunk!\");\n    }\n  };\n};\n\nconst Gameboard = () => {\n  // gameboard should have two coordinates X and Y which are represented by numbers\n  // from 0 to 9, and look like [0,0], [0,1]... next line [1,0], [1,1]...\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    return board;\n  };\n  return { createBoard };\n};\n\nconst board = Gameboard();\nconsole.log(board.createBoard());\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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