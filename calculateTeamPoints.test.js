const calculateTeamPoints = require("./calculateTeamPoints");

test("Returns sorted table", () => {
    const list = calculateTeamPoints(
    [ 'Lions 3, Snakes 3',
    'Tarantulas 1, FC Awesome 0',
    'Lions 1, FC Awesome 1',
    'Tarantulas 3, Snakes 1',
    'Lions 4, Grouches 0' ]);
    expect(list).toStrictEqual([ { 'Lions ':
       { name: 'Lions ',
         goalScored: 8,
         goalReceived: 4,
         totalPoints: 5,
         gamePlayed: 3 },
      'Snakes ':
       { name: 'Snakes ',
         goalScored: 4,
         goalReceived: 6,
         totalPoints: 1,
         gamePlayed: 2 },
      'Tarantulas ':
       { name: 'Tarantulas ',
         goalScored: 4,
         goalReceived: 1,
         totalPoints: 6,
         gamePlayed: 2 },
      'FC Awesome ':
       { name: 'FC Awesome ',
         goalScored: 1,
         goalReceived: 2,
         totalPoints: 1,
         gamePlayed: 2 },
      'Grouches ':
       { name: 'Grouches ',
         goalScored: 0,
         goalReceived: 4,
         totalPoints: 0,
         gamePlayed: 1 } },
    [ 'Lions ', 'Snakes ', 'Tarantulas ', 'FC Awesome ', 'Grouches ' ] ]);
})