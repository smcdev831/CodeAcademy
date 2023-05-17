const team = {
  _players: [
    { firstName: "John", lastName: "H", age: 41 },
    { firstName: "Maria", lastName: "M", age: 41 },
    { firstName: "Karyn", lastName: "M", age: 47 },
  ],
  _games: [
    { opponent: "Austin", teamPoints: 10, opponentPoints: 15 },
    { opponent: "Ayr", teamPoints: 7, opponentPoints: 0 },
    { opponent: "Anchorage", teamPoints: 12, opponentPoints: 5 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },
};
