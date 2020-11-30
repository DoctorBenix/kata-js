const Player = require("./Player");

const tennisScore = ["Love", "15", "30", "40"];

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  get score() {
    const firstPlayerPoints = this._firstPlayer.pointNb;
    const secondPlayerPoints = this._secondPlayer.pointNb;
    if (firstPlayerPoints + secondPlayerPoints < 6) {
      return `${this._firstPlayer.name} => ${tennisScore[firstPlayerPoints]} - ${tennisScore[secondPlayerPoints]} <= ${this._secondPlayer.name}`;
    } else {
      if (firstPlayerPoints === secondPlayerPoints) {
        return `${this._firstPlayer.name} => Deuce <= ${this._secondPlayer.name}`;
      }
      return `Advantage ${
        firstPlayerPoints > secondPlayerPoints
          ? this._firstPlayer.name
          : this._secondPlayer.name
      }`;
    }
  }
}

module.exports = Game;
