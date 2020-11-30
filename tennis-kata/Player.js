class Player {
  constructor(name, score = 0) {
    this._name = name;
    this._score = score;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }
}

module.exports = Player;
