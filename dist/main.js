/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring */\n/* eslint-disable no-alert */\n/* eslint-disable no-lonely-if */\n/* eslint-disable no-plusplus */\n/* eslint-disable no-use-before-define */\n/* eslint-disable default-case */\n/* eslint-disable no-loop-func */\n/* eslint-disable no-else-return */\n/* eslint-disable array-callback-return */\n/* eslint-disable consistent-return */\n\nconst Ship = () => {\n  // put the ships on the board (in random places)\n  // DONE! //make checking function universal or adaptive for any type of ship\n  // DONE! // make functions to place 2 squares and 1 squares ships (start placing from the longest)\n  // DONE! // Do not create neighbour squares subarray for squares that are not on the map\n  // DONE! // 3-square ships x 2\n  // DONE! // the existing ship should inlcude a subarray with all the squares around it\n  // DONE! // check for ships to not cross each others\n  // DONE! // the firstSquare shouldn't be in the existing ship and also shouldn't be next to other ship\n  // DONE! // the secondSquare and thirdSquare shouldn't be there either\n  // DONE! // make calcNeighbourSquares function universal\n  // ON HOLD // simplify functions to make one universal function to place all the ships\n  // ON HOLD // create a variable to store an array of checks check only necessary elements\n  // ON HOLD // try to store ships in an object\n\n  const shipSquares = [];\n  const neighbourSquares = [];\n\n  const checkOverlapping = (shipArr, square) => {\n    const result = [];\n    if (shipArr.length === 0) {\n      return false;\n    } else {\n      // console.log(square);\n      shipArr.forEach((item) => {\n        result.push(\n          item.some((value) => square[0] === value[0] && square[1] === value[1])\n        );\n      });\n    }\n    // console.log(result);\n    return result.some((value) => value === true);\n  };\n\n  const calcNeighbourSquares = (firstSquare, shipLength, dir = \"x\") => {\n    const result = [];\n    if (dir === \"x\") {\n      // for 1 square ship: a, b, f, k, l, m, n, o\n      // for 2 square ship: a, b, c, f, j, k, l, m, n, o\n      // for 3 square ship: a, b, c, d, f, h, j, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 2, firstSquare[1] - 1];\n      const d = [firstSquare[0] + 3, firstSquare[1] - 1];\n      const e = [firstSquare[0] + 4, firstSquare[1] - 1];\n      const f = [firstSquare[0] + shipLength, firstSquare[1]];\n      const g = [firstSquare[0] + 4, firstSquare[1] + 1];\n      const h = [firstSquare[0] + 3, firstSquare[1] + 1];\n      const j = [firstSquare[0] + 2, firstSquare[1] + 1];\n      const k = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const l = [firstSquare[0], firstSquare[1] + 1];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 1:\n          result.push(a, b, f, k, l, m, n, o);\n          break;\n        case 2:\n          result.push(a, b, c, f, j, k, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, f, h, j, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    } else if (dir === \"y\") {\n      // for 2 square ship: a, b, c, d, e, h, l, m, n, o\n      // for 3 square ship: a, b, c, d, e, f, h, k, l, m, n, o\n      const a = [firstSquare[0], firstSquare[1] - 1];\n      const b = [firstSquare[0] + 1, firstSquare[1] - 1];\n      const c = [firstSquare[0] + 1, firstSquare[1]];\n      const d = [firstSquare[0] + 1, firstSquare[1] + 1];\n      const e = [firstSquare[0] + 1, firstSquare[1] + 2];\n      const f = [firstSquare[0] + 1, firstSquare[1] + 3];\n      const g = [firstSquare[0] + 1, firstSquare[1] + 4];\n      const h = [firstSquare[0], firstSquare[1] + shipLength];\n      const j = [firstSquare[0] - 1, firstSquare[1] + 4];\n      const k = [firstSquare[0] - 1, firstSquare[1] + 3];\n      const l = [firstSquare[0] - 1, firstSquare[1] + 2];\n      const m = [firstSquare[0] - 1, firstSquare[1] + 1];\n      const n = [firstSquare[0] - 1, firstSquare[1]];\n      const o = [firstSquare[0] - 1, firstSquare[1] - 1];\n      switch (shipLength) {\n        case 2:\n          result.push(a, b, c, d, e, h, l, m, n, o);\n          break;\n        case 3:\n          result.push(a, b, c, d, e, f, h, k, l, m, n, o);\n          break;\n        case 4:\n          result.push(a, b, c, d, e, f, g, h, j, k, l, m, n, o);\n          break;\n      }\n    }\n    return result;\n  };\n\n  const make1sqShip = () => {\n    if (shipSquares.length === 10) {\n      console.log(\"Ship squares:\");\n      console.log(shipSquares);\n      console.log(\"Neigbour squares:\");\n      console.log(neighbourSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, 1));\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      if (\n        checkOverlapping(shipSquares, firstSquare) ||\n        checkOverlapping(neighbourSquares, firstSquare)\n      ) {\n        neighbourSquares.pop();\n        return make1sqShip();\n      } else {\n        shipSquares.push([firstSquare]);\n        return make1sqShip();\n      }\n    }\n  };\n\n  const make2sqShip = () => {\n    if (shipSquares.length === 6) {\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 1) || firstSquare[0] < 9) {\n          secondSquare = [x + 1, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, \"x\"));\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 1) || firstSquare[1] < 9) {\n          secondSquare = [x, y + 1];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 2, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(secondSquare, 2, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [];\n      ship.push(firstSquare, secondSquare);\n      if (\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        neighbourSquares.pop();\n        return make2sqShip();\n      } else {\n        shipSquares.push([firstSquare, secondSquare]);\n        return make2sqShip();\n      }\n    }\n  };\n\n  const make3sqShips = () => {\n    if (shipSquares.length === 3) {\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second and the third squares\n      let secondSquare;\n      let thirdSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 2) || firstSquare[0] < 8) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, \"x\"));\n        }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 2) || firstSquare[1] < 8) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 3, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(thirdSquare, 3, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [];\n      ship.push(firstSquare, secondSquare, thirdSquare);\n      // console.log(ship);\n      // console.log(\n      //   ship.some(\n      //     (item) =>\n      //       checkOverlapping(shipSquares, item) ||\n      //       checkOverlapping(neighbourSquares, item)\n      //   )\n      // );\n      if (\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        // console.log(\"Ship squares:\");\n        // console.log(shipSquares);\n        // console.log(\"Neigbour squares:\");\n        // console.log(neighbourSquares);\n        neighbourSquares.pop();\n        return make3sqShips();\n      } else {\n        shipSquares.push([firstSquare, secondSquare, thirdSquare]);\n        return make3sqShips();\n      }\n    }\n  };\n\n  const make4sqShip = () => {\n    if (shipSquares.length === 1) {\n      // console.log(\"Ship squares:\");\n      // console.log(shipSquares);\n      // console.log(\"Neigbour squares:\");\n      // console.log(neighbourSquares);\n      return shipSquares;\n    } else {\n      // define x,y and the first square of the ship\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      const firstSquare = [x, y];\n      // define the second, the third squares, and the fourth\n      let secondSquare;\n      let thirdSquare;\n      let fourthSquare;\n      // randomly choose the direction\n      const dirXY = Math.floor(Math.random() * 2); // 1 = x, 0 = y\n      const dirPlusMinus = Math.floor(Math.random() * 2); // 1 = plus, 0 = minus\n      if (dirXY) {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[0] < 3) || firstSquare[0] < 7) {\n          secondSquare = [x + 1, y];\n          thirdSquare = [x + 2, y];\n          fourthSquare = [x + 3, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, \"x\"));\n          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, \"x\"));\n        } else {\n          secondSquare = [x - 1, y];\n          thirdSquare = [x - 2, y];\n          fourthSquare = [x - 3, y];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, \"x\"));\n          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, \"x\"));\n        }\n        // if some of the squares overlaps the previous ship - repeat from the beginning\n        // !! create a variable to store an array of checks\n        // check only necessary elements\n        // if (\n        //   checkOverlapping(shipSquares, firstSquare) ||\n        //   checkOverlapping(shipSquares, secondSquare) ||\n        //   checkOverlapping(shipSquares, thirdSquare) ||\n        //   checkOverlapping(shipSquares, fourthSquare) ||\n        //   checkOverlapping(neighbourSquares, firstSquare) ||\n        //   checkOverlapping(neighbourSquares, secondSquare) ||\n        //   checkOverlapping(neighbourSquares, thirdSquare) ||\n        //   checkOverlapping(neighbourSquares, fourthSquare)\n        // ) {\n        //   neighbourSquares.pop();\n        //   return make4sqShip();\n        // } else {\n        //   shipSquares.push([\n        //     firstSquare,\n        //     secondSquare,\n        //     thirdSquare,\n        //     fourthSquare,\n        //   ]);\n        //   return make4sqShip();\n        // }\n      } else {\n        // also check for coordinates to do not go over 9 or be less then 0\n        if ((dirPlusMinus && firstSquare[1] < 3) || firstSquare[1] < 7) {\n          secondSquare = [x, y + 1];\n          thirdSquare = [x, y + 2];\n          fourthSquare = [x, y + 3];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(firstSquare, 4, \"y\"));\n          // neighbourSquares.push(calcNeighbourSquares4(firstSquare, \"y\"));\n        } else {\n          secondSquare = [x, y - 1];\n          thirdSquare = [x, y - 2];\n          fourthSquare = [x, y - 3];\n          // calculate all the neighbour squares and push to subarray\n          neighbourSquares.push(calcNeighbourSquares(fourthSquare, 4, \"y\"));\n          // neighbourSquares.push(calcNeighbourSquares4(fourthSquare, \"y\"));\n        }\n      }\n      // if some of the squares overlaps the previous ship - repeat from the beginning\n      const ship = [];\n      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);\n      if (\n        // checkOverlapping(shipSquares, firstSquare) ||\n        // checkOverlapping(shipSquares, secondSquare) ||\n        // checkOverlapping(shipSquares, thirdSquare) ||\n        // checkOverlapping(shipSquares, fourthSquare) ||\n        // checkOverlapping(neighbourSquares, firstSquare) ||\n        // checkOverlapping(neighbourSquares, secondSquare) ||\n        // checkOverlapping(neighbourSquares, thirdSquare) ||\n        // checkOverlapping(neighbourSquares, fourthSquare)\n        ship.some(\n          (item) =>\n            checkOverlapping(shipSquares, item) ||\n            checkOverlapping(neighbourSquares, item)\n        )\n      ) {\n        neighbourSquares.pop();\n        return make4sqShip();\n      } else {\n        shipSquares.push([\n          firstSquare,\n          secondSquare,\n          thirdSquare,\n          fourthSquare,\n        ]);\n        return make4sqShip();\n      }\n    }\n  };\n\n  const checkShipsNum = (length) => {\n    let count = 0;\n    switch (length) {\n      case 4:\n        if (shipSquares.length === 0) {\n          // console.log(\"here\");\n          break;\n        }\n        shipSquares.forEach((item) => {\n          if (item.length === 4) {\n            count++;\n          }\n        });\n        // console.log(\"count\", count);\n        if (count >= 1) {\n          console.log(\"You only can have one 4-square ship!\");\n          return false;\n        }\n        break;\n      case 3:\n        shipSquares.forEach((item) => {\n          if (item.length === 3) {\n            count++;\n          }\n        });\n        if (count >= 2) {\n          console.log(\"You only can have two 3-square ships!\");\n          return false;\n        }\n        break;\n      case 2:\n        shipSquares.forEach((item) => {\n          if (item.length === 2) {\n            count++;\n          }\n        });\n        if (count >= 3) {\n          console.log(\"You only can have three 2-square ships!\");\n          return false;\n        }\n        break;\n      case 1:\n        shipSquares.forEach((item) => {\n          if (item.length === 1) {\n            count++;\n          }\n        });\n        if (count >= 4) {\n          console.log(\"You only can have four 1-square ships!\");\n          return false;\n        }\n        break;\n    }\n    return true;\n  };\n\n  // make ships manually\n  const makeShip = (firstSquare, length, dir = \"x\") => {\n    if (shipSquares.length === 10) {\n      console.log(\"Can't create any more ships!\");\n      return false;\n    }\n    // console.log(\"Ship length\", checkShipsNum(length));\n    if (!checkShipsNum(length)) {\n      return false;\n    }\n    const ship = [];\n    const x = firstSquare[0];\n    const y = firstSquare[1];\n    let secondSquare;\n    let thirdSquare;\n    let fourthSquare;\n    if (dir === \"x\") {\n      if (firstSquare[0] < length - 1 || firstSquare[0] < 10 - (length - 1)) {\n        secondSquare = [x + 1, y];\n        thirdSquare = [x + 2, y];\n        fourthSquare = [x + 3, y];\n      } else {\n        console.log(\"Ship goes out of the gameboard!\");\n        return false;\n      }\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));\n      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);\n      ship.length = length;\n    } else if (dir === \"y\") {\n      if (firstSquare[1] < length - 1 || firstSquare[1] < 10 - (length - 1)) {\n        secondSquare = [x, y + 1];\n        thirdSquare = [x, y + 2];\n        fourthSquare = [x, y + 3];\n      } else {\n        console.log(\"Ship goes out of the gameboard!\");\n        return false;\n      }\n      neighbourSquares.push(calcNeighbourSquares(firstSquare, length, dir));\n      ship.push(firstSquare, secondSquare, thirdSquare, fourthSquare);\n      ship.length = length;\n    }\n    if (\n      ship.some(\n        (item) =>\n          checkOverlapping(shipSquares, item) ||\n          checkOverlapping(neighbourSquares, item)\n      )\n    ) {\n      neighbourSquares.pop();\n      console.log(\"Your ship ovelaps an exisiting ship!\");\n      return false;\n    } else {\n      shipSquares.push(ship);\n      console.log(\"Ship is created!\");\n      return true;\n    }\n  };\n  // place all the ships\n  const autoMakeShips = () => {\n    make4sqShip();\n    make3sqShips();\n    make2sqShip();\n    return make1sqShip();\n    // makeShip([7, 2], 4, \"y\");\n    // makeShip([2, 9], 4, \"x\");\n    // makeShip([0, 1], 4, \"y\");\n    // makeShip([9, 7], 3, \"y\");\n    // makeShip([3, 2], 3, \"x\");\n    // makeShip([1, 6], 2, \"y\");\n    // makeShip([6, 9], 2, \"x\");\n    // makeShip([5, 5], 2, \"x\");\n    // makeShip([7, 1], 1);\n    // makeShip([3, 7], 1);\n    // makeShip([8, 3], 1);\n    // makeShip([0, 9], 1);\n    // console.log(\"Ship squares:\");\n    // console.log(shipSquares);\n    // console.log(\"Neigbour squares:\");\n    // console.log(neighbourSquares);\n  };\n\n  // show an array with created ships\n  const showShips = () => shipSquares;\n\n  return { autoMakeShips, makeShip, showShips, shipSquares };\n};\n\n// gameboard will take ships locations as an array\nconst Gameboard = (shipsArr) => {\n  const shipsLocations = shipsArr;\n  const sunkenShips = [];\n  const missedShots = [];\n  // hitShipsReg [length, index, coordinates...]\n  const hitShipsReg = [\n    [4, 0],\n    [3, 1],\n    [3, 2],\n    [2, 3],\n    [2, 4],\n    [2, 5],\n    [1, 6],\n    [1, 7],\n    [1, 8],\n    [1, 9],\n  ];\n\n  const createBoard = () => {\n    const board = [];\n    let x = 0;\n    while (x < 10) {\n      for (let y = 0; y < 10; y++) {\n        board.push([x, y]);\n      }\n      x++;\n    }\n    console.log(board);\n    return board;\n  };\n\n  // const showShips = () => shipsLocations;\n  // const arrangeShips = () => {\n  //   const arr = [];\n  //   shipsLocations.forEach((item, index) => {\n  //     arr.push([item.length, index]);\n  //   });\n  //   // console.log(arr);\n  //   return arr;\n  // };\n\n  const isHit = (ship, coordinates) =>\n    ship.some(\n      (value) => value[0] === coordinates[0] && value[1] === coordinates[1]\n    );\n\n  const isSunk = (index) => {\n    // hitShipsReg.some(\n    //   (value) => value[value.length - 2] === value.length - 2\n    // ) === true && sunkenShips.some((value) => index === value[1]) === false\n    // sunkenShips.some((value) => {\n    //   console.log(\"index:\", index);\n    //   console.log(\"value:\", value);\n    //   return index === value[1];\n    // });\n    // console.log(\"index:\", index);\n    // console.log(sunkenShips);\n    // if (index === \"undefined\") {\n    //   return false;\n    // }\n    // if (\n    //   hitShipsReg.some(\n    //     (value) => value[value.length - 2] === value.length - 2\n    //   ) === true &&\n    //   sunkenShips.some((value) => index === value[1]) === false\n    // ) {\n    //   return true;\n    // } else {\n    //   return false;\n    // }\n    let result = false;\n    hitShipsReg.forEach((value) => {\n      if (value[value.length - 2] === value.length - 2) {\n        result = true;\n        value.push(\"Sunk\");\n      }\n    });\n    console.log(\"result:\", result);\n    return result;\n  };\n\n  const recordHit = (index, coordinates) => {\n    hitShipsReg.forEach((element) => {\n      if (element[element.length - 1] === index) {\n        element.unshift(coordinates);\n      }\n    });\n  };\n\n  const receiveAttack = (coordinates) => {\n    // console.log(\"hitShipsReg:\", hitShipsReg);\n    const tempSunkArr = [...sunkenShips];\n    console.log(\"chieck\", tempSunkArr, sunkenShips);\n    shipsLocations.forEach((item, index) => {\n      // console.log(\"isHit: \", isHit(item, coordinates));\n      if (isHit(item, coordinates)) {\n        // record hit ships\n        recordHit(index, coordinates);\n        // check if the ship sunk\n        if (\n          // hitShipsReg.some((value) => value[value.length - 2] === value.length - 2)\n          isSunk(index)\n        ) {\n          // sunkenShips.some(value => index === value[1])\n          // console.log(sunkenShips.some((value) => index === value[1]));\n          sunkenShips.push([item, index]);\n          console.log(\"Sunk\", sunkenShips);\n          // return \"Sunk\";\n        }\n        console.log(\"Hit\", hitShipsReg);\n        // return \"Hit\";\n      }\n    });\n    // record missing shots\n    if (\n      !hitShipsReg.some(\n        (value) =>\n          value[0][0] === coordinates[0] && value[0][1] === coordinates[1]\n      )\n    ) {\n      missedShots.push(coordinates);\n      // console.log(\"Missed\", missedShots);\n      return \"Missed\";\n    } else if (tempSunkArr.length !== sunkenShips.length) {\n      // how to check if sunk?\n      // console.log(\"Sunk\", sunkenShips);\n      return \"Sunk\";\n    } else {\n      // console.log(\"chieck\", tempSunkArr, sunkenShips);\n      // console.log(\"Hit\", hitShipsReg);\n      return \"Hit\";\n    }\n  };\n  return {\n    createBoard,\n    receiveAttack,\n    shipsLocations,\n    hitShipsReg,\n    missedShots,\n    sunkenShips,\n  };\n};\n\nconst Player = () => {\n  // const getName = () => name;\n  const myShips = [];\n\n  // help-function to createShips()\n  const defineLength = (shipsArr) => {\n    if (shipsArr.length < 1) {\n      return 4;\n    } else if (shipsArr.length >= 1 && shipsArr.length < 3) {\n      return 3;\n    } else if (shipsArr.length >= 3 && shipsArr.length < 6) {\n      return 2;\n    } else if (shipsArr.length >= 6 && shipsArr.length <= 10) {\n      return 1;\n    }\n  };\n\n  const createShips = () => {\n    // the execution will follow the following steps:\n    // - explain that we start with one 4-squares ship, the two 3-squares ship etc.\n    // - input (or choose on the board) the start point of the ship\n    // - choose a direction\n    // - display all the problems if the ship's location is not correct (overlapping, going off the board)\n    // - place a ship\n\n    const shipFactory = Ship();\n    const shipsArr = shipFactory.shipSquares;\n    const randomShips = prompt(\n      \"Do you want to place ships automatically?\",\n      \"yes\"\n    );\n    if (randomShips === \"yes\") {\n      shipFactory.autoMakeShips();\n      // console.log(shipFactory.showShips());\n    } else {\n      console.log(\n        \"Let's create your ships.\\nThe total amount of ships should be 10 ships.\\nOne - 4-square ship.\\nTwo - 3-square ships.\\nThree - 2-square ships.\\nFour - 1-square ships.\\nWe will follow the above order to create your ships.\\n We start with 4-square then 3-square etc.\"\n      );\n      while (shipsArr.length < 10) {\n        const length = defineLength(shipsArr);\n        let firstSquare = prompt(\n          `Please, choose the first square of your ${length}-square ship`,\n          \"[0,0]\"\n        );\n        firstSquare = [+firstSquare[1], +firstSquare[3]];\n        let dir;\n        if (length !== 1) {\n          dir = prompt(\n            \"Choose the direction\",\n            \"print x(across) or y(down)\"\n          ).toLowerCase();\n        } else {\n          dir = \"x\";\n        }\n        if (shipFactory.makeShip(firstSquare, length, dir)) {\n          console.log(\"Done!\");\n          console.log(shipFactory.showShips());\n        } else {\n          console.log(\"Please, try to change coordinates!\");\n        }\n      }\n      console.log(shipFactory.showShips());\n    }\n    // save all the created ships\n    shipFactory.showShips().forEach((item) => myShips.push(item));\n  };\n\n  return {\n    // getName,\n    createShips,\n    myShips,\n  };\n};\n\n// DOM manipulaitons\n// DONE!! // place ships on the board\n// DONE!! // Make the second board\n// DONE!! // add buttons Hide ships and Show ships - make them work\n// DONE!! // Each player places ships\n// Players attack each other and record hits or missing shots\n// DONE! // show missed/hit shots on the second board\n// FIXED!! // fix - all ships recorded as sunken after the first ship sunk\n// FIXED!! // recieveAttack() only records missed shots and adds nothing to hit array although it registers a hit\n// Create a screen to change players\nconst playerStatus = document.querySelector(\".player-status\");\nconst gameStatus = document.querySelector(\".game-status\");\nconst changeStatus = () => {\n  if (playerStatus.innerText === \"Player-1 plays\") {\n    // hideShips();\n    playerStatus.innerText = \"Player-2 plays\";\n  } else if (playerStatus.innerText === \"Player-2 plays\") {\n    // hideShips();\n    playerStatus.innerText = \"Player-1 plays\";\n  }\n};\nconst placeShipsBtn = document.querySelector(\".place-ships-btn\");\nconst boardCells1 = document.querySelectorAll(\".board-cell-1\");\nconst player1 = Player();\nconst player2 = Player();\nconst shipsIndex1 = [];\nconst shipsIndex2 = [];\n\n// console.log(playerStatus.innerText[0]);\nplaceShipsBtn.addEventListener(\"click\", () => {\n  if (playerStatus.innerText === \"Player-1 plays\") {\n    // const player1 = Player();\n    player1.createShips();\n    // const board1 = Gameboard(player1.myShips);\n    player1.myShips.forEach((item) => {\n      item.forEach((value) => {\n        boardCells1.forEach((element, index) => {\n          if (\n            +element.dataset.x === value[0] &&\n            +element.dataset.y === value[1]\n          ) {\n            element.classList.add(\"ship\");\n            shipsIndex1.push(index);\n          }\n        });\n      });\n    });\n    // playerStatus.innerText = \"Player-2 plays\";\n  } else if (playerStatus.innerText === \"Player-2 plays\") {\n    // const player2 = Player();\n    player2.createShips();\n    // const board2 = Gameboard(player2.myShips);\n    player2.myShips.forEach((item) => {\n      item.forEach((value) => {\n        boardCells1.forEach((element, index) => {\n          if (\n            +element.dataset.x === value[0] &&\n            +element.dataset.y === value[1]\n          ) {\n            element.classList.add(\"ship\");\n            shipsIndex2.push(index);\n          }\n        });\n      });\n    });\n  }\n  if (shipsIndex1.length > 0 && shipsIndex2.length > 0) {\n    placeShipsBtn.style.display = \"none\";\n    gameStatus.innerText = \"Game on!\";\n  }\n  // console.log(shipsIndex1);\n});\n\n// hide ships\nconst hideShips = () => {\n  boardCells1.forEach((item) => {\n    if (item.classList.contains(\"ship\")) {\n      item.classList.remove(\"ship\");\n    }\n  });\n};\nconst hideShipsBtn = document.querySelector(\".hide-ships\");\nhideShipsBtn.addEventListener(\"click\", hideShips);\n// show existing ships\nconst showShipsBtn = document.querySelector(\".show-ships\");\nshowShipsBtn.addEventListener(\"click\", () => {\n  if (playerStatus.innerText === \"Player-1 plays\") {\n    shipsIndex1.forEach((item) => {\n      boardCells1[item].classList.add(\"ship\");\n    });\n  } else if (playerStatus.innerText === \"Player-2 plays\") {\n    shipsIndex2.forEach((item) => {\n      boardCells1[item].classList.add(\"ship\");\n    });\n  }\n});\n// change turn\nconst changeTurnBtn = document.querySelector(\".change-turn-btn\");\nchangeTurnBtn.addEventListener(\"click\", () => {\n  changeStatus();\n  hideShips();\n});\n// attack the opponent\n// const boardCells2 = document.querySelectorAll(\".board-cell-2\");\nconst gameboard2 = document.querySelector(\".gameboard-2\");\nconst board1 = Gameboard(player1.myShips);\nconst board2 = Gameboard(player2.myShips);\n\ngameboard2.addEventListener(\"click\", (event) => {\n  if (gameStatus.innerText === \"Placing ships...\") {\n    return;\n  }\n  const x = event.target.dataset.x;\n  const y = event.target.dataset.y;\n  const coordinates = [+x, +y];\n  if (playerStatus.innerText === \"Player-1 plays\") {\n    // console.log(board2.receiveAttack(coordinates));\n    const attackStatus = board2.receiveAttack(coordinates);\n    if (attackStatus === \"Missed\") {\n      event.target.classList.add(\"missed\");\n    } else if (attackStatus === \"Hit\") {\n      event.target.classList.add(\"hit\");\n    } else if (attackStatus === \"Sunk\") {\n      event.target.classList.add(\"sunk\");\n    }\n  } else if (playerStatus.innerText === \"Player-2 plays\") {\n    // console.log(board1.receiveAttack(coordinates));\n    const attackStatus = board1.receiveAttack(coordinates);\n    if (attackStatus === \"Missed\") {\n      event.target.classList.add(\"missed\");\n    } else if (attackStatus === \"Hit\") {\n      event.target.classList.add(\"hit\");\n    } else if (attackStatus === \"Sunk\") {\n      event.target.classList.add(\"sunk\");\n    }\n  }\n  // console.log(coordinates);\n});\n// record missing shots\n\n// create a player > create ships\n// const player11 = Player(\"Joe\");\n// const player22 = Player(\"Ana\");\n// player1.createShips();\n// const board11 = Gameboard(player11.myShips);\n// console.log(\"Player1 ships\", board11.shipsLocations);\n// player2.createShips();\n// const board22 = Gameboard(player22.myShips);\n// console.log(\"Player2 ships\", board22.shipsLocations);\n\n// board1.receiveAttack([4, 0]);\n\n// board2.receiveAttack([2, 4]);\n// board1.receiveAttack([8, 7]);\n// board2.receiveAttack([4, 2]);\n// board1.receiveAttack([5, 0]);\n// board2.receiveAttack([5, 0]);\n// board1.receiveAttack([9, 9]);\n// board2.receiveAttack([0, 0]);\n\n// const ships = Ship();\n// const shipsArr = ships.autoMakeShips();\n// console.log(ships.shipSquares);\n// ships.makeShip([1, 1], 4, \"x\");\n// const board = Gameboard(shipsArr);\n// console.log(board.showShips());\n\n// board.put3squareShips();\n// board.make4sqShip();\n// board.make3sqShips();\n// board.make2sqShip();\n// board.make1sqShip();\n// board.createBoard();\n// console.log(board.showShips());\n// ship1.wasHit();\n// ship1.wasHit();\n\n// const board = Gameboard(ship1);\n// console.log(board.shipsLocations);\n\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;