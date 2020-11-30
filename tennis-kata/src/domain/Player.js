class Player {
  constructor(name, pointNb = 0) {
    this._name = name;
    this._pointNb = pointNb;
  }

  get name() {
    return this._name;
  }

  get pointNb() {
    return this._pointNb;
  }

  set pointNb(value) {
    return (this._pointNb = value);
  }
}

module.exports = Player;
