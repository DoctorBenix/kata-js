const Game = require("../Game");
const Player = require("../Player");

describe("Player score", function () {
  beforeEach(function () {
    firstPlayer = new Player("Player 1");
    secondPlayer = new Player("Player 2");
  });

  it("Player should have a O score by default", function () {
    expect(firstPlayer.score).toBe(0);
  });

  it("It should display initial score game", function () {
    game = new Game(firstPlayer, secondPlayer);
    expect(game.score).toBe("Player 1 => love - love <= Player 2");
  });
});
