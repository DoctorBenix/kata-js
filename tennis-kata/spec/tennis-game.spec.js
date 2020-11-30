const Player = require("../Player");

describe("Player score", function () {
  beforeEach(function () {
    firstPlayer = new Player("firstPlayer");
  });

  it("Player should have a O score by default", function () {
    console.log(firstPlayer.name);
    expect(firstPlayer.score).toBe(0);
  });
});
