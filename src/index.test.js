/* eslint-disable no-undef */
import { Ship, Gameboard } from "./index";

describe("Checking ships created by user", () => {
  const shipFactory = Ship();
  const createShips = () => {
    shipFactory.makeShip([0, 0], 4, "x");
    shipFactory.makeShip([3, 5], 3, "x");
    shipFactory.makeShip([1, 7], 3, "y");
    shipFactory.makeShip([1, 3], 2, "y");
    shipFactory.makeShip([3, 8], 2, "y");
    shipFactory.makeShip([6, 7], 2, "x");
    shipFactory.makeShip([7, 4], 1, "x");
    shipFactory.makeShip([8, 1], 1, "x");
    shipFactory.makeShip([9, 7], 1, "x");
  };
  createShips();
  const gameboard = Gameboard(shipFactory.shipSquares);

  test("Returns true if one more ship can be created", () => {
    expect(shipFactory.makeShip([6, 2], 1)).toBeTruthy();
  });
  test("Returns false if there's no more place for a ship", () => {
    expect(shipFactory.makeShip([2, 2], 1)).toBeFalsy();
  });
  test("Records a missed shot", () => {
    expect(gameboard.receiveAttack([4, 2])).toEqual("Missed");
  });
  test("Records a hit", () => {
    expect(gameboard.receiveAttack([4, 5])).toEqual("Hit");
  });
  test("Records a sunken ship", () => {
    expect(gameboard.receiveAttack([7, 4])).toEqual("Sunk");
  });
});

describe("Checking ships created by computer", () => {
  const shipFactory1 = Ship();
  test("returns an array if 10 elements", () => {
    expect(shipFactory1.autoMakeShips().length).toEqual(10);
  });
});
