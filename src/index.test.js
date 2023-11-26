/* eslint-disable no-undef */
import Ship from "./ship";
import Player from "./player";
import Gameboard from "./gameboard";

describe("Checking ships created by computer", () => {
  const shipFactory = Ship();
  test("returns an array if 10 elements", () => {
    expect(shipFactory.autoMakeShips().length).toEqual(10);
  });
});

describe("Checking ships created manually", () => {
  const player = Player();
  player.ship.push(
    {
      classList: {
        value: ["ghost-ship"],
        remove(arg) {
          const index = this.value.indexOf(arg);
          this.value.splice(index, 1);
        },
        add(arg) {
          this.value.push(arg);
        },
      },
      dataset: { x: "3", y: "4" },
    },
    {
      classList: {
        value: ["ghost-ship"],
        remove(arg) {
          const index = this.value.indexOf(arg);
          this.value.splice(index, 1);
        },
        add(arg) {
          this.value.push(arg);
        },
      },
      dataset: { x: "3", y: "5" },
    }
  );
  test("returns an array with a 2-square ship", () => {
    expect(player.handlePlaceShipBtn().length).toEqual(2);
  });
});

describe("Checking attack function", () => {
  const ships = [
    [
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
    ],
  ];
  const board = Gameboard(ships);
  test('return "Hit" message if ship is hit', () => {
    expect(board.receiveAttack([4, 8])).toEqual("Hit");
  });
  test('return "Missed" message if player missed', () => {
    expect(board.receiveAttack([9, 8])).toEqual("Missed");
  });
  board.receiveAttack([5, 8]);
  board.receiveAttack([6, 8]);
  test('return "Sunk" message if ship sunk', () => {
    expect(board.receiveAttack([7, 8])).toEqual("Sunk");
  });
});

describe("Checking winner anonunce", () => {
  const ships = [
    [
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
    ],
  ];
  const board = Gameboard(ships);
  board.receiveAttack([4, 8]);
  board.receiveAttack([5, 8]);
  board.receiveAttack([6, 8]);
  board.sunkenShipsReg.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
  test('return "Winner" if all ships were sunken', () => {
    expect(board.receiveAttack([7, 8])).toEqual("Winner");
  });
});
