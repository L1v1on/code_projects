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
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
};
