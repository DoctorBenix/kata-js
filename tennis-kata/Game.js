const Player = require("./Player");

const tennisScore = ["love", "15"];

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  get score() {
    const firstPlayerScore = tennisScore[this._firstPlayer.pointNb];
    const secondPlayerScore = tennisScore[this._secondPlayer.pointNb];
    return `${this._firstPlayer.name} => ${firstPlayerScore} - ${secondPlayerScore} <= ${this._secondPlayer.name}`;
  }
}

module.exports = Game;
