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

eval("/* eslint-disable no-use-before-define */\n/* eslint-disable default-case */\n/* eslint-disable no-loop-func */\n/* eslint-disable no-else-return */\n/* eslint-disable array-callback-return */\n/* eslint-disable consistent-return */\n/* eslint-disable no-plusplus */\n// create 4 one-square ships\n// 3 - two-square ships\n// 2 - three-square ships\n// 1 - four-square ship\n\nconst Ship = () => {\n  // put the ships on the board (in random places)\n  // DONE! //make checking function universal or adaptive for any type of ship\n  // DONE! // make functions to place 2 squares and 1 squares ships (start placing from the longest)\n  // DONE! // Do not create neighbour squares subarray for squares that are not on the map\n  // DONE! // 3-square ships x 2\n  // DONE! // the existing ship should inlcude a subarray with all the squares around it\n  // DONE! // check for ships to not cross each others\n  // DONE! // the firstSquare shouldn't be in the existing ship and also shouldn't be next to other ship\n  // DONE! // the secondSquare and thirdSquare shouldn't be there either\n  // DONE! // make calcNeighbourSquares function universal\n  // ON HOLD // simplify functions to make one universal function to place all the ships\n  // ON HOLD // create a variable to store an array of checks check only necessary elements\n  // ON HOLD // try to store ships in an object\n\n  const shipSquares = [];\n  const nextToSquares = [];\n\n  const checkOverlaping = (shipArr, square) => {\n    const result = [];\n    if (shipArr.length === 0) {\n      return false;\n    } else {\n      // console.log(shipArr);\n      shipArr.forEach((item) => {\n        result.push(\n          item.some((value) => square[0] === value[0] && square[1] === value[1])\n        );\n      });\n    }\n    // console.log(result);\n    return result.some((value) => value === true);\n  };\n\n  const calcNeighbourSquares = (firstSquare, shipLength, dir = \"x\") => {\n    const result = [];\n    if (dir === \"x\") {\n      // for 1 square ship: a, b, f, k, l, m, n, o\n      // for 2 square ship: a, b, c, f, j, k, l, m, n, o\n      // for 3 square ship: a, b, c, d, f, h, j, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 2, firstSquare[1] - 1];\n      const d = [firstSquare[0] + 3, firstSquare[1] - 1];\n      const e = [firstSquare[0] + 4, firstSquare[1] - 1];\n      const f = [firstSquare[0] + shipLength, firstSquare[1]];\n      const g = [firstSquare[0] + 4, firstSquare[1] + 1];\n      const h = [firstSquare[0] + 3, firstSquare[1] + 1];\n      const j = [firstSquare[0] + 2, firstSquare[1] + 1];\n      const k = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const l = [firstSquare[0], firstSquare[1] + 1];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 1:\n          result.push(a, b, f, k, l, m, n, o);\n          break;\n        case 2:\n          result.push(a, b, c, f, j, k, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, f, h, j, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    } else if (dir === \"y\") {\n      // for 2 square ship: a, b, c, d, e, h, l, m, n, o\n      // for 3 square ship: a, b, c, d, e, f, h, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 1, firstSquare[1]];\n      const d = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const e = [firstSquare[0] + 1, firstSquare[1] + 2];\n      const f = [firstSquare[0] + 1, firstSquare[1] + 3];\n      const g = [firstSquare[0] + 1, firstSquare[1] + 4];\n      const h = [firstSquare[0], firstSquare[1] + shipLength];\n      const j = [firstSquare[0] - 1, firstSquare[1] + 4];\n      const k = [firstSquare[0] - 1, firstSquare[1] + 3];\n      const l = [firstSquare[0] - 1, firstSquare[1] + 2];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 2:\n          result.push(a, b, c, d, e, h, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, e, f, h, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    }\n    return result;\n  };\n\n  const make1sqShip = () => {\n    if (shipSquares.length === 10) {\n      console.log(\"Ship squares:\");\n      console.log(shipSquares);\n      console.log(\"Neigbour squares:\");\n      console.log(nextToSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      nextToSquares.push(calcNeighbourSquares(firstSquare, 1));\n      // nextToSquares.push(calcNeighbourSquares1(firstSquare));\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      if (\n        checkOverlaping(shipSquares, firstSquare) ||\n        checkOverlaping(nextToSquares, firstSquare)\n      ) {\n        nextToSquares.pop();\n        return make1sqShip();\n      } else {\n        shipSquares.push([firstSquare]);\n        return make1sqShip();\n      }\n    }\n  };\n\n  const make2sqShip = () => {\n    if (shipSquares.length === 6) {\n      // console.log(\"Ship squares:\");\n      // console.log(shipSquares);\n      // console.log(\"Neigbour squares:\");\n      // console.log(nextToSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 1) || firstSquare[0] < 9) {\n          secondSquare = [x + 1, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 2, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares2(firstSquare, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(secondSquare, 2, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares2(secondSquare, \"x\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare)\n        ) {\n          nextToSquares.pop();\n          return make2sqShip();\n        } else {\n          shipSquares.push([firstSquare, secondSquare]);\n          return make2sqShip();\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 1) || firstSquare[1] < 9) {\n          secondSquare = [x, y + 1];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 2, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares2(firstSquare, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(secondSquare, 2, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares2(secondSquare, \"y\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare)\n        ) {\n          nextToSquares.pop();\n          return make2sqShip();\n        } else {\n          shipSquares.push([firstSquare, secondSquare]);\n          return make2sqShip();\n        }\n      }\n    }\n  };\n\n  const make3sqShips = () => {\n    if (shipSquares.length === 3) {\n      // console.log(\"Ship squares:\");\n      // console.log(shipSquares);\n      // console.log(\"Neigbour squares:\");\n      // console.log(nextToSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second and the third squares\n      let secondSquare;\n      let thirdSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 2) || firstSquare[0] < 8) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 3, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares3(firstSquare, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(thirdSquare, 3, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares3(thirdSquare, \"x\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(shipSquares, thirdSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, thirdSquare)\n        ) {\n          nextToSquares.pop();\n          return make3sqShips();\n        } else {\n          shipSquares.push([firstSquare, secondSquare, thirdSquare]);\n          return make3sqShips();\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 3, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares3(firstSquare, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(thirdSquare, 3, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares3(thirdSquare, \"y\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(shipSquares, thirdSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, thirdSquare)\n        ) {\n          nextToSquares.pop();\n          return make3sqShips();\n        } else {\n          shipSquares.push([firstSquare, secondSquare, thirdSquare]);\n          return make3sqShips();\n        }\n      }\n    }\n  };\n\n  const make4sqShip = () => {\n    if (shipSquares.length === 1) {\n      // console.log(\"Ship squares:\");\n      // console.log(shipSquares);\n      // console.log(\"Neigbour squares:\");\n      // console.log(nextToSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      let thirdSquare;\n      let fourthSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 3) || firstSquare[0] < 7) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          fourthSquare = [x + 3, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 4, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares4(firstSquare, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          fourthSquare = [x - 3, y];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(fourthSquare, 4, \"x\"));\n          // nextToSquares.push(calcNeighbourSquares4(fourthSquare, \"x\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        // !! create a variable to store an array of checks\n        // check only necessary elements\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(shipSquares, thirdSquare) ||\n          checkOverlaping(shipSquares, fourthSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, thirdSquare) ||\n          checkOverlaping(nextToSquares, fourthSquare)\n        ) {\n          nextToSquares.pop();\n          return make4sqShip();\n        } else {\n          shipSquares.push([\n            firstSquare,\n            secondSquare,\n            thirdSquare,\n            fourthSquare,\n          ]);\n          return make4sqShip();\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          fourthSquare = [x, y + 3];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(firstSquare, 4, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares4(firstSquare, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          fourthSquare = [x, y - 3];\n          // calculate all the neighbour squares and push to subarray\n          nextToSquares.push(calcNeighbourSquares(fourthSquare, 4, \"y\"));\n          // nextToSquares.push(calcNeighbourSquares4(fourthSquare, \"y\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        if (\n          checkOverlaping(shipSquares, firstSquare) ||\n          checkOverlaping(shipSquares, secondSquare) ||\n          checkOverlaping(shipSquares, thirdSquare) ||\n          checkOverlaping(shipSquares, fourthSquare) ||\n          checkOverlaping(nextToSquares, firstSquare) ||\n          checkOverlaping(nextToSquares, secondSquare) ||\n          checkOverlaping(nextToSquares, thirdSquare) ||\n          checkOverlaping(nextToSquares, fourthSquare)\n        ) {\n          nextToSquares.pop();\n          return make4sqShip();\n        } else {\n          shipSquares.push([\n            firstSquare,\n            secondSquare,\n            thirdSquare,\n            fourthSquare,\n          ]);\n          return make4sqShip();\n        }\n      }\n    }\n  };\n  // place all the ships\n  const makeShips = () => {\n    make4sqShip();\n    make3sqShips();\n    make2sqShip();\n    return make1sqShip();\n  };\n\n  // show an array with created ships\n  const showShips = () => shipSquares;\n\n  return { makeShips, showShips };\n};\n\n// gameboard will take ships locations as an array\nconst Gameboard = (shipsArr) => {\n  // DONE! // find out how to record missed shops\n  // define sunken ships\n  const shipsLocations = shipsArr;\n  const hitShips = [];\n  const sunkenShips = [];\n  const missedShots = [];\n\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    console.log(board);\n    return board;\n  };\n\n  const showShips = () => shipsLocations;\n  const recordShips = () => {\n    const arr = [];\n    shipsLocations.forEach((item, index) => {\n      arr.push([item.length, index]);\n    });\n    return arr;\n  };\n\n  const hitShips2 = recordShips();\n  const receiveAttack = (coordinates) => {\n    const hitArrCopy = [...hitShips];\n    shipsLocations.forEach((item, index) => {\n      if (\n        item.some(\n          (value) => value[0] === coordinates[0] && value[1] === coordinates[1]\n        )\n      ) {\n        // record hit ships\n        hitShips2.forEach((element) => {\n          if (element[element.length - 1] === index) {\n            element.unshift(coordinates);\n          }\n        });\n        // check if the ship sunk\n        if (\n          hitShips2.some(\n            (value) => value[value.length - 2] === value.length - 2\n          )\n        ) {\n          sunkenShips.push(item);\n          console.log(\"Sunk\", sunkenShips);\n        }\n        console.log(\"Hit\", hitShips2);\n      }\n    });\n    if (hitArrCopy.length === hitShips.length) {\n      missedShots.push(coordinates);\n      // console.log(\"Missed\", missedShots);\n    }\n  };\n  return {\n    createBoard,\n    showShips,\n    receiveAttack,\n    hitShips2,\n  };\n};\n\n// create Players that can create ships and attack\n\nconst ships = Ship();\nconst shipsArr = ships.makeShips();\nconst board = Gameboard(shipsArr);\n// console.log(board.hitShips2);\n\nboard.receiveAttack([4, 0]);\nboard.receiveAttack([3, 0]);\nboard.receiveAttack([2, 0]);\nboard.receiveAttack([5, 0]);\n\n// board.put3squareShips();\n// board.make4sqShip();\n// board.make3sqShips();\n// board.make2sqShip();\n// board.make1sqShip();\n// board.createBoard();\n// console.log(board.showShips());\n// ship1.wasHit();\n// ship1.wasHit();\n\n// const board = Gameboard(ship1);\n// console.log(board.shipsLocations);\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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