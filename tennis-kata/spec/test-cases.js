const simpleCases = (player1Name, player2Name) => [
  {
    firstPlayerPointNb: 0,
    secondPlayerPointNb: 0,
    result: `${player1Name} => Love - Love <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 1,
    secondPlayerPointNb: 1,
    result: `${player1Name} => 15 - 15 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 2,
    secondPlayerPointNb: 2,
    result: `${player1Name} => 30 - 30 <= ${player2Name}`,
  },

  {
    firstPlayerPointNb: 1,
    secondPlayerPointNb: 0,
    result: `${player1Name} => 15 - Love <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 0,
    secondPlayerPointNb: 1,
    result: `${player1Name} => Love - 15 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 2,
    secondPlayerPointNb: 0,
    result: `${player1Name} => 30 - Love <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 0,
    secondPlayerPointNb: 2,
    result: `${player1Name} => Love - 30 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 3,
    secondPlayerPointNb: 0,
    result: `${player1Name} => 40 - Love <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 0,
    secondPlayerPointNb: 3,
    result: `${player1Name} => Love - 40 <= ${player2Name}`,
  },

  {
    firstPlayerPointNb: 2,
    secondPlayerPointNb: 1,
    result: `${player1Name} => 30 - 15 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 1,
    secondPlayerPointNb: 2,
    result: `${player1Name} => 15 - 30 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 3,
    secondPlayerPointNb: 1,
    result: `${player1Name} => 40 - 15 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 1,
    secondPlayerPointNb: 3,
    result: `${player1Name} => 15 - 40 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 3,
    secondPlayerPointNb: 2,
    result: `${player1Name} => 40 - 30 <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 2,
    secondPlayerPointNb: 3,
    result: `${player1Name} => 30 - 40 <= ${player2Name}`,
  },
];

const deuceCases = (player1Name, player2Name) => [
  {
    firstPlayerPointNb: 3,
    secondPlayerPointNb: 3,
    result: `${player1Name} => Deuce <= ${player2Name}`,
  },
  {
    firstPlayerPointNb: 4,
    secondPlayerPointNb: 4,
    result: `${player1Name} => Deuce <= ${player2Name}`,
  },
];

module.exports = { simpleCases, deuceCases };
