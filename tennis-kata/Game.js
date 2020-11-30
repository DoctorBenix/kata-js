const Player = require("./Player");

const tennisScore = ["Love", "15", "30", "40"];

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  get score() {
    const firstPlayerScore = tennisScore[this._firstPlayer.pointNb];
    const secondPlayerScore = tennisScore[this._secondPlayer.pointNb];
    if (
      firstPlayerScore === secondPlayerScore &&
      this._firstPlayer.pointNb > 2
    ) {
      return `${this._firstPlayer.name} => Deuce <= ${this._secondPlayer.name}`;
    } else {
      return `${this._firstPlayer.name} => ${firstPlayerScore} - ${secondPlayerScore} <= ${this._secondPlayer.name}`;
    }
  }
}

module.exports = Game;
