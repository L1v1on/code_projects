const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    },
    {
      firstName: 'Bob',
      lastName: 'Joe',
      age: 13,
    },
    {
      firstName: 'Tom',
      lastName: 'Dill',
      age: 10,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'B-Boys',
      teamPoints: 29,
      opponentPoints: 35,
    },
    {
      opponent: 'Bacon',
      teamPoints: 50,
      opponentPoints: 15,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};
team.addPlayer('Ezra', 'Vance', 99);
console.log(team.players);
team.addGame('Noodle', 30, 60);
console.log(team.games);