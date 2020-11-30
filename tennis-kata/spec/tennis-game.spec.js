const Game = require("../src/domain/Game");
const Player = require("../src/domain/Player");

const {
  simpleCases,
  deuceCases,
  playerAdvantageCases,
  playerVictoryCases,
} = require("./tennis-game-test-suites");

const FIRST_PLAYER_NAME = "Nadal";
const SECOND_PLAYER_NAME = "Federer";

const setupGame = (p1Points, p2Points) => {
  firstPlayer.pointNb = p1Points;
  secondPlayer.pointNb = p2Points;
  return new Game(firstPlayer, secondPlayer);
};

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
    ({ p1Points, p2Points, result }) => {
      it(`It should display ${result} while 
      ${FIRST_PLAYER_NAME}: ${p1Points} points - 
      ${SECOND_PLAYER_NAME}: ${p2Points} points`, function () {
        const game = setupGame(p1Points, p2Points);

        expect(game.score).toBe(result);
      });
    }
  );

  // DEUCE CASES TEST SUITE
  deuceCases(FIRST_PLAYER_NAME, SECOND_PLAYER_NAME).forEach(
    ({ p1Points, p2Points, result }) => {
      it(`It should display ${result} while 
      ${FIRST_PLAYER_NAME}: ${p1Points} points - 
      ${SECOND_PLAYER_NAME}: ${p2Points} points`, function () {
        const game = setupGame(p1Points, p2Points);

        expect(game.score).toBe(result);
      });
    }
  );

  // PLAYER ADVANTAGES TEST SUITE
  playerAdvantageCases(FIRST_PLAYER_NAME, SECOND_PLAYER_NAME).forEach(
    ({ p1Points, p2Points, result }) => {
      it(`It should display "${result}" while 
      ${FIRST_PLAYER_NAME}: ${p1Points} points - 
      ${SECOND_PLAYER_NAME}: ${p2Points} points`, function () {
        const game = setupGame(p1Points, p2Points);

        expect(game.score).toBe(result);
      });
    }
  );
});
