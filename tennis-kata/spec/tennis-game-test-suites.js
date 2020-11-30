const simpleCases = (p1Name, p2Name) => [
  {
    p1Points: 0,
    p2Points: 0,
    result: `${p1Name} => Love - Love <= ${p2Name}`,
  },
  {
    p1Points: 1,
    p2Points: 1,
    result: `${p1Name} => 15 - 15 <= ${p2Name}`,
  },
  {
    p1Points: 2,
    p2Points: 2,
    result: `${p1Name} => 30 - 30 <= ${p2Name}`,
  },

  {
    p1Points: 1,
    p2Points: 0,
    result: `${p1Name} => 15 - Love <= ${p2Name}`,
  },
  {
    p1Points: 0,
    p2Points: 1,
    result: `${p1Name} => Love - 15 <= ${p2Name}`,
  },
  {
    p1Points: 2,
    p2Points: 0,
    result: `${p1Name} => 30 - Love <= ${p2Name}`,
  },
  {
    p1Points: 0,
    p2Points: 2,
    result: `${p1Name} => Love - 30 <= ${p2Name}`,
  },
  {
    p1Points: 3,
    p2Points: 0,
    result: `${p1Name} => 40 - Love <= ${p2Name}`,
  },
  {
    p1Points: 0,
    p2Points: 3,
    result: `${p1Name} => Love - 40 <= ${p2Name}`,
  },

  {
    p1Points: 2,
    p2Points: 1,
    result: `${p1Name} => 30 - 15 <= ${p2Name}`,
  },
  {
    p1Points: 1,
    p2Points: 2,
    result: `${p1Name} => 15 - 30 <= ${p2Name}`,
  },
  {
    p1Points: 3,
    p2Points: 1,
    result: `${p1Name} => 40 - 15 <= ${p2Name}`,
  },
  {
    p1Points: 1,
    p2Points: 3,
    result: `${p1Name} => 15 - 40 <= ${p2Name}`,
  },
  {
    p1Points: 3,
    p2Points: 2,
    result: `${p1Name} => 40 - 30 <= ${p2Name}`,
  },
  {
    p1Points: 2,
    p2Points: 3,
    result: `${p1Name} => 30 - 40 <= ${p2Name}`,
  },
];

const deuceCases = (p1Name, p2Name) => [
  {
    p1Points: 3,
    p2Points: 3,
    result: `${p1Name} => Deuce <= ${p2Name}`,
  },
  {
    p1Points: 4,
    p2Points: 4,
    result: `${p1Name} => Deuce <= ${p2Name}`,
  },
];

const playerAdvantageCases = (p1Name, p2Name) => [
  {
    p1Points: 4,
    p2Points: 3,
    result: `Advantage ${p1Name}`,
  },
  {
    p1Points: 3,
    p2Points: 4,
    result: `Advantage ${p2Name}`,
  },
  {
    p1Points: 5,
    p2Points: 4,
    result: `Advantage ${p1Name}`,
  },
  {
    p1Points: 4,
    p2Points: 5,
    result: `Advantage ${p2Name}`,
  },
  {
    p1Points: 38,
    p2Points: 37,
    result: `Advantage ${p1Name}`,
  },
  {
    p1Points: 37,
    p2Points: 38,
    result: `Advantage ${p2Name}`,
  },
];

const playerVictoryCases = (p1Name, p2Name) => [
  {
    p1Points: 4,
    p2Points: 1,
    result: `Game ${p1Name}`,
  },
  {
    p1Points: 1,
    p2Points: 4,
    result: `Game ${p2Name}`,
  },

  {
    p1Points: 4,
    p2Points: 2,
    result: `Game ${p1Name}`,
  },
  {
    p1Points: 2,
    p2Points: 4,
    result: `Game ${p2Name}`,
  },
  {
    p1Points: 4,
    p2Points: 0,
    result: `Game ${p1Name}`,
  },
  {
    p1Points: 0,
    p2Points: 4,
    result: `Game ${p2Name}`,
  },
  {
    p1Points: 6,
    p2Points: 4,
    result: `Game ${p1Name}`,
  },
  {
    p1Points: 4,
    p2Points: 6,
    result: `Game ${p2Name}`,
  },
  {
    p1Points: 40,
    p2Points: 38,
    result: `Game ${p1Name}`,
  },
  {
    p1Points: 38,
    p2Points: 40,
    result: `Game ${p2Name}`,
  },
];

module.exports = {
  simpleCases,
  deuceCases,
  playerAdvantageCases,
  playerVictoryCases,
};
