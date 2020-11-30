const Player = require("./Player");
const {
  simpleScoreResult,
  deuceScoreResult,
  advantageScoreResult,
} = require("../utils/game-utils");

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  get score() {
    const firstPlayerPoints = this._firstPlayer.pointNb;
    const secondPlayerPoints = this._secondPlayer.pointNb;
    if (
      firstPlayerPoints < 4 &&
      secondPlayerPoints < 4 &&
      firstPlayerPoints + secondPlayerPoints < 6
    ) {
      return simpleScoreResult(
        this._firstPlayer.name,
        this._secondPlayer.name,
        firstPlayerPoints,
        secondPlayerPoints
      );
    } else {
      if (firstPlayerPoints === secondPlayerPoints)
        return deuceScoreResult(
          this._firstPlayer.name,
          this._secondPlayer.name
        );
      return Math.abs(firstPlayerPoints - secondPlayerPoints) === 1
        ? advantageScoreResult(
            this._firstPlayer.name,
            this._secondPlayer.name,
            firstPlayerPoints,
            secondPlayerPoints
          )
        : `Game ${
            firstPlayerPoints > secondPlayerPoints
              ? this._firstPlayer.name
              : this._secondPlayer.name
          }`;
    }
  }
}

module.exports = Game;
