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

eval("/* eslint-disable no-lonely-if */\n/* eslint-disable no-plusplus */\n/* eslint-disable no-use-before-define */\n/* eslint-disable default-case */\n/* eslint-disable no-loop-func */\n/* eslint-disable no-else-return */\n/* eslint-disable array-callback-return */\n/* eslint-disable consistent-return */\n\nconst Ship = () => {\n  // put the ships on the board (in random places)\n  // DONE! //make checking function universal or adaptive for any type of ship\n  // DONE! // make functions to place 2 squares and 1 squares ships (start placing from the longest)\n  // DONE! // Do not create neighbour squares subarray for squares that are not on the map\n  // DONE! // 3-square ships x 2\n  // DONE! // the existing ship should inlcude a subarray with all the squares around it\n  // DONE! // check for ships to not cross each others\n  // DONE! // the firstSquare shouldn't be in the existing ship and also shouldn't be next to other ship\n  // DONE! // the secondSquare and thirdSquare shouldn't be there either\n  // DONE! // make calcNeighbourSquares function universal\n  // ON HOLD // simplify functions to make one universal function to place all the ships\n  // ON HOLD // create a variable to store an array of checks check only necessary elements\n  // ON HOLD // try to store ships in an object\n\n  const shipSquares = [];\n  const neighbourSquares = [];\n\n  const checkOverlapping = (shipArr, square) => {\n    const result = [];\n    if (shipArr.length === 0) {\n      return false;\n    } else {\n      // console.log(shipArr);\n      shipArr.forEach((item) => {\n        result.push(\n          item.some((value) => square[0] === value[0] && square[1] === value[1])\n        );\n      });\n    }\n    // console.log(result);\n    return result.some((value) => value === true);\n  };\n\n  const calcNeighbourSquares = (firstSquare, shipLength, dir = \"x\") => {\n    const result = [];\n    if (dir === \"x\") {\n      // for 1 square ship: a, b, f, k, l, m, n, o\n      // for 2 square ship: a, b, c, f, j, k, l, m, n, o\n      // for 3 square ship: a, b, c, d, f, h, j, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 2, firstSquare[1] - 1];\n      const d = [firstSquare[0] + 3, firstSquare[1] - 1];\n      const e = [firstSquare[0] + 4, firstSquare[1] - 1];\n      const f = [firstSquare[0] + shipLength, firstSquare[1]];\n      const g = [firstSquare[0] + 4, firstSquare[1] + 1];\n      const h = [firstSquare[0] + 3, firstSquare[1] + 1];\n      const j = [firstSquare[0] + 2, firstSquare[1] + 1];\n      const k = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const l = [firstSquare[0], firstSquare[1] + 1];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 1:\n          result.push(a, b, f, k, l, m, n, o);\n          break;\n        case 2:\n          result.push(a, b, c, f, j, k, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, f, h, j, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    } else if (dir === \"y\") {\n      // for 2 square ship: a, b, c, d, e, h, l, m, n, o\n      // for 3 square ship: a, b, c, d, e, f, h, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 1, firstSquare[1]];\n      const d = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const e = [firstSquare[0] + 1, firstSquare[1] + 2];\n      const f = [firstSquare[0] + 1, firstSquare[1] + 3];\n      const g = [firstSquare[0] + 1, firstSquare[1] + 4];\n      const h = [firstSquare[0], firstSquare[1] + shipLength];\n      const j = [firstSquare[0] - 1, firstSquare[1] + 4];\n      const k = [firstSquare[0] - 1, firstSquare[1] + 3];\n      const l = [firstSquare[0] - 1, firstSquare[1] + 2];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 2:\n          result.push(a, b, c, d, e, h, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, e, f, h, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    }\n    return result;\n  };\n\n  const make1sqShip = () => {\n    if (shipSquares.length === 10) {\n      console.log(\"Ship squares:\");\n      console.log(shipSquares);\n      console.log(\"Neigbour squares:\");\n      console.log(neighbourSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, 1));\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      if (\n        checkOverlapping(shipSquares, firstSquare) ||\n        checkOverlapping(neighbourSquares, firstSquare)\n      ) {\n        neighbourSquares.pop();\n        return make1sqShip();\n      } else {\n        shipSquares.push([firstSquare]);\n        return make1sqShip();\n      }\n    }\n  };\n\n  const make2sqShip = () => {\n    if (shipSquares.length === 6) {\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 1) || firstSquare[0] < 9) {\n          secondSquare = [x + 1, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, \"x\"));\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 1) || firstSquare[1] < 9) {\n          secondSquare = [x, y + 1];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [...firstSquare, secondSquare];\n      if (\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        neighbourSquares.pop();\n        return make2sqShip();\n      } else {\n        shipSquares.push([firstSquare, secondSquare]);\n        return make2sqShip();\n      }\n    }\n  };\n\n  const make3sqShips = () => {\n    if (shipSquares.length === 3) {\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second and the third squares\n      let secondSquare;\n      let thirdSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 2) || firstSquare[0] < 8) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, \"x\"));\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [...firstSquare, secondSquare, thirdSquare];\n      ship.some(\n        (item) =>\n          checkOverlapping(shipSquares, item) ||\n          checkOverlapping(neighbourSquares, item)\n      );\n      if (\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        neighbourSquares.pop();\n        return make3sqShips();\n      } else {\n        shipSquares.push([firstSquare, secondSquare, thirdSquare]);\n        return make3sqShips();\n      }\n    }\n  };\n\n  const make4sqShip = () => {\n    if (shipSquares.length === 1) {\n      // console.log(\"Ship squares:\");\n      // console.log(shipSquares);\n      // console.log(\"Neigbour squares:\");\n      // console.log(neighbourSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      let thirdSquare;\n      let fourthSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 3) || firstSquare[0] < 7) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          fourthSquare = [x + 3, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, \"x\"));\n          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          fourthSquare = [x - 3, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, \"x\"));\n          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, \"x\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        // !! create a variable to store an array of checks\n        // check only necessary elements\n        // if (\n        //   checkOverlapping(shipSquares, firstSquare) ||\n        //   checkOverlapping(shipSquares, secondSquare) ||\n        //   checkOverlapping(shipSquares, thirdSquare) ||\n        //   checkOverlapping(shipSquares, fourthSquare) ||\n        //   checkOverlapping(neighbourSquares, firstSquare) ||\n        //   checkOverlapping(neighbourSquares, secondSquare) ||\n        //   checkOverlapping(neighbourSquares, thirdSquare) ||\n        //   checkOverlapping(neighbourSquares, fourthSquare)\n        // ) {\n        //   neighbourSquares.pop();\n        //   return make4sqShip();\n        // } else {\n        //   shipSquares.push([\n        //     firstSquare,\n        //     secondSquare,\n        //     thirdSquare,\n        //     fourthSquare,\n        //   ]);\n        //   return make4sqShip();\n        // }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          fourthSquare = [x, y + 3];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, \"y\"));\n          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          fourthSquare = [x, y - 3];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, \"y\"));\n          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [...firstSquare, secondSquare, thirdSquare, fourthSquare];\n      if (\n        // checkOverlapping(shipSquares, firstSquare) ||\n        // checkOverlapping(shipSquares, secondSquare) ||\n        // checkOverlapping(shipSquares, thirdSquare) ||\n        // checkOverlapping(shipSquares, fourthSquare) ||\n        // checkOverlapping(neighbourSquares, firstSquare) ||\n        // checkOverlapping(neighbourSquares, secondSquare) ||\n        // checkOverlapping(neighbourSquares, thirdSquare) ||\n        // checkOverlapping(neighbourSquares, fourthSquare)\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        neighbourSquares.pop();\n        return make4sqShip();\n      } else {\n        shipSquares.push([\n          firstSquare,\n          secondSquare,\n          thirdSquare,\n          fourthSquare,\n        ]);\n        return make4sqShip();\n      }\n    }\n  };\n\n  // make ships manually\n  const makeOneShip = (firstSquare, length, dir = \"x\") => {\n    if (shipSquares.length === 10) {\n      console.log(\"Can't create any more ships!\");\n      return \"Can't create any more ships!\";\n    }\n    const ship = [];\n    const x = firstSquare[0];\n    const y = firstSquare[1];\n    let secondSquare;\n    let thirdSquare;\n    let fourthSquare;\n    if (dir === \"x\") {\n      if (firstSquare[0] < length - 1 || firstSquare[0] < 10 - (length - 1)) {\n        secondSquare = [x + 1, y];\n        thirdSquare = [x + 2, y];\n        fourthSquare = [x + 3, y];\n      } else {\n        console.log(\"Ship goes out of the gameboard!\");\n        return \"Ship goes out of the gameboard!\";\n      }\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));\n      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);\n      ship.length = length;\n    } else if (dir === \"y\") {\n      if (firstSquare[1] < length - 1 || firstSquare[1] < 10 - (length - 1)) {\n        secondSquare = [x, y + 1];\n        thirdSquare = [x, y + 2];\n        fourthSquare = [x, y + 3];\n      } else {\n        console.log(\"Ship goes out of the gameboard!\");\n        return \"Ship goes out of the gameboard!\";\n      }\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));\n      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);\n      ship.length = length;\n    }\n    if (\n      ship.some(\n        (item) =>\n          checkOverlapping(shipSquares, item) ||\n          checkOverlapping(neighbourSquares, item)\n      )\n    ) {\n      neighbourSquares.pop();\n      console.log(\"Your ship ovelaps an exisiting ship!\");\n      return \"Your ship ovelaps an exisiting ship!\";\n    } else {\n      shipSquares.push(ship);\n      console.log(\"Ship is created!\");\n      return ship;\n    }\n  };\n  // place all the ships\n  const makeShips = () => {\n    make4sqShip();\n    make3sqShips();\n    make2sqShip();\n    return make1sqShip();\n    // makeOneShip([0, 1], 4, \"y\");\n    // makeOneShip([9, 7], 3, \"y\");\n    // makeOneShip([3, 2], 3, \"x\");\n    // makeOneShip([1, 6], 2, \"y\");\n    // makeOneShip([6, 9], 2, \"x\");\n    // makeOneShip([5, 5], 2, \"x\");\n    // makeOneShip([7, 1], 1);\n    // makeOneShip([3, 7], 1);\n    // makeOneShip([8, 3], 1);\n    // makeOneShip([0, 9], 1);\n    // console.log(\"Ship squares:\");\n    // console.log(shipSquares);\n    // console.log(\"Neigbour squares:\");\n    // console.log(neighbourSquares);\n  };\n\n  // show an array with created ships\n  const showShips = () => shipSquares;\n\n  return { makeShips, makeOneShip, showShips };\n};\n\n// gameboard will take ships locations as an array\nconst Gameboard = (shipsArr) => {\n  // DONE! // find out how to record missed shops\n  const shipsLocations = shipsArr;\n  const sunkenShips = [];\n  const missedShots = [];\n\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    console.log(board);\n    return board;\n  };\n\n  const showShips = () => shipsLocations;\n  const recordShips = () => {\n    const arr = [];\n    shipsLocations.forEach((item, index) => {\n      arr.push([item.length, index]);\n    });\n    return arr;\n  };\n\n  const hitShips = recordShips();\n  const receiveAttack = (coordinates) => {\n    shipsLocations.forEach((item, index) => {\n      if (\n        item.some(\n          (value) => value[0] === coordinates[0] && value[1] === coordinates[1]\n        )\n      ) {\n        // record hit ships\n        hitShips.forEach((element) => {\n          if (element[element.length - 1] === index) {\n            element.unshift(coordinates);\n          }\n        });\n        // check if the ship sunk\n        if (\n          hitShips.some((value) => value[value.length - 2] === value.length - 2)\n        ) {\n          sunkenShips.push(item);\n          console.log(\"Sunk\", sunkenShips);\n        }\n        console.log(\"Hit\", hitShips);\n      }\n    });\n    // record missing shots\n    if (\n      !hitShips.some(\n        (value) =>\n          value[0][0] === coordinates[0] && value[0][1] === coordinates[1]\n      )\n    ) {\n      missedShots.push(coordinates);\n      console.log(\"Missed\", missedShots);\n    }\n  };\n  return {\n    createBoard,\n    showShips,\n    receiveAttack,\n    hitShips,\n  };\n};\n\n// create Players that can create ships and attack!!!\n\nconst ships = Ship();\nconst shipsArr = ships.makeShips();\n// ships.makeOneShip([1, 1], 4, \"x\");\n// const board = Gameboard(shipsArr);\n// console.log(board.showShips());\n\n// board.receiveAttack([4, 0]);\n// board.receiveAttack([3, 0]);\n// board.receiveAttack([2, 0]);\n// board.receiveAttack([5, 0]);\n\n// board.put3squareShips();\n// board.make4sqShip();\n// board.make3sqShips();\n// board.make2sqShip();\n// board.make1sqShip();\n// board.createBoard();\n// console.log(board.showShips());\n// ship1.wasHit();\n// ship1.wasHit();\n\n// const board = Gameboard(ship1);\n// console.log(board.shipsLocations);\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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