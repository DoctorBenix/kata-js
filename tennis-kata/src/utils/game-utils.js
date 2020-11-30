const tennisScore = ["Love", "15", "30", "40"];

const simpleScoreResult = (p1Name, p2Name, p1Score, p2score) =>
  `${p1Name} => ${tennisScore[p1Score]} - ${tennisScore[p2score]} <= ${p2Name}`;

const deuceScoreResult = (p1Name, p2Name) => `${p1Name} => Deuce <= ${p2Name}`;

const advantageScoreResult = (p1Name, p2Name, p1Score, p2score) =>
  `Advantage ${p1Score > p2score ? p1Name : p2Name}`;

module.exports = { simpleScoreResult, deuceScoreResult, advantageScoreResult };
