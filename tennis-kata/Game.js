class Game {
  constructor(firstPlayerName, secondPlayerName) {
    this.player1 = new Player(firstPlayerName);
    this.player2 = new Player(secondPlayerName);
    this.score = 0;
  }

  get score() {
    return this.name;
  }

  get score() {
    return this.score;
  }
}

module.exports = Game;
