///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(`checking for update`);
// ---------------------- 1 so we need an array of unique events that occoured in the game, thus convert a set to an array, make sure you unpack the set in the new array
console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

//---------------------- 2 remove teh yellow card at the minute 64, i.e delete the event that occoured at the key value 64
gameEvents.delete(64);
console.log(gameEvents.values());

//------------------------------3 simply prting a string to the console
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes `
);

// since the last event occoured at the 92nd minute we need to take care of that too
//unpacking the keys of the map, converting it into an array and then in order to access the last element, using the pop method
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes `
);

// -------------------------------4 iterate over the map
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? `First` : `Second`;
  //   console.log(event);
  console.log(`[${half} HALF] ${min}: ${event} `);
}
