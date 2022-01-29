const team = {
    _players: [
      {
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
      },
      {
        firstName: "Kwasi",
        lastName: "Sam",
        age: 13,
      },
      {
        firstName: "Nana",
        lastName: "Kojo",
        age: 10,
      },
    ],
    _games: [
      {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
      },
      {
        opponent: "Ludu",
        teamPoints: 33,
        opponentPoints: 7,
      },
      {
        opponent: "Ampe",
        teamPoints: 82,
        opponentPoints: 17,
      },
    ],
  
    //Getter methods
    get Players() {
      return this._players;
    },
    get Games() {
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
  
      this._players.push(game);
    },
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 28);
  team.addPlayer("Bugs", "Bunny", 28);
  
  team.addGame("United", 95, 80);
  team.addGame("KotoKo", 75, 25);
  team.addGame("Blacks", 95, 75);
  
  console.log(team._players);
  console.log(team._games);
  