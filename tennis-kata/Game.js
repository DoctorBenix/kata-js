const Player = require("./Player");

class Game {
  constructor(firstPlayer, secondPlayer) {
    this._player1 = firstPlayer;
    this._player2 = secondPlayer;
    this._score = `${firstPlayer.name} => love - love <= ${secondPlayer.name}`;
  }

  get score() {
    return this._score;
  }
}

module.exports = Game;
