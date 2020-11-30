const Game = require("../Game");
const Player = require("../Player");
const { simpleCases } = require("./test-cases");

const FIRST_PLAYER_NAME = "Nadal";
const SECOND_PLAYER_NAME = "Federer";

describe("Tennis game", function () {
  beforeEach(function () {
    firstPlayer = new Player(FIRST_PLAYER_NAME);
    secondPlayer = new Player(SECOND_PLAYER_NAME);
  });

  it("Player should have a O point by default", function () {
    expect(firstPlayer.pointNb).toBe(0);
  });

  it("It should display initial score game", function () {
    game = new Game(firstPlayer, secondPlayer);
    expect(game.score).toBe(
      `${FIRST_PLAYER_NAME} => Love - Love <= ${SECOND_PLAYER_NAME}`
    );
  });

  it("It should display the right score game while Player 1 scored one point", function () {
    firstPlayer.pointNb = 1;
    game = new Game(firstPlayer, secondPlayer);
    expect(game.score).toBe(
      `${FIRST_PLAYER_NAME} => 15 - Love <= ${SECOND_PLAYER_NAME}`
    );
  });

  // SIMPLE CASES TEST SUITE
  simpleCases(FIRST_PLAYER_NAME, SECOND_PLAYER_NAME).forEach(
    ({ firstPlayerPointNb, secondPlayerPointNb, result }) => {
      it(`It should display ${result} while 
      ${FIRST_PLAYER_NAME}: ${firstPlayerPointNb} points - 
      ${SECOND_PLAYER_NAME}: ${secondPlayerPointNb} points`, function () {
        firstPlayer.pointNb = firstPlayerPointNb;
        secondPlayer.pointNb = secondPlayerPointNb;
        game = new Game(firstPlayer, secondPlayer);
        expect(game.score).toBe(result);
      });
    }
  );
});
