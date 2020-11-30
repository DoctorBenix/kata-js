const Game = require("../Game");
const Player = require("../Player");

describe("Tennis game", function () {
  beforeEach(function () {
    firstPlayer = new Player("Player 1");
    secondPlayer = new Player("Player 2");
  });

  it("Player should have a O point by default", function () {
    expect(firstPlayer.pointNb).toBe(0);
  });

  it("It should display initial score game", function () {
    game = new Game(firstPlayer, secondPlayer);
    expect(game.score).toBe("Player 1 => love - love <= Player 2");
  });

  it("It should display the right score game while Player 1 scored one point", function () {
    firstPlayer.pointNb = 1;
    game = new Game(firstPlayer, secondPlayer);
    expect(game.score).toBe("Player 1 => 15 - love <= Player 2");
  });
});
