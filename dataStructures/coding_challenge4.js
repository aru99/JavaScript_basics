"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//creating different arrays for each team from the given object, destructuring the players array in the game object
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//gk for goal keeper and filedsplayer for the rest of the team members, using rest syntax
const [gk, ...filedPlayer] = players1;
console.log(gk, filedPlayer);

// array for all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//array for newly added players in team1
const players1final = [...players1, "Thiago", "Coutino", "Perisic"];
console.log(players1final);

// creating new variables for the team scores, renaming the x property in game.odds as draw
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} golas were score`);
};

printGoals("a", "b", "c", "d");
printGoals("a", "b");
printGoals(...game.scored);

//figuring out which team wins without the conditional operator
team1 > team2 &&
  console.log(
    `team 1 is likely to win the match with a likely hood of ${team1}`
  );
team2 > team1 &&
  console.log(
    `team 2 is likely to win the match with a likely hood of ${team2}`
  );
