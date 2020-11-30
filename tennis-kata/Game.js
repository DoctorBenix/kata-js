const Player = require("./Player");

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._player1 = firstPlayer;
    this._player2 = secondPlayer;
  }

  get score() {
    return `${this._player1.name} => love - love <= ${this._player2.name}`;
  }
}

module.exports = Game;
