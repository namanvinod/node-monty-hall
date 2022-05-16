// const possibleValues = ['X', 'G'];
// let doors = ['X', 'X', 'X'];
let doorWithPrize = -1;
let playerChoice = -1;
let revealedDoorIndex = -1;
let totalWon = -1;

const setup = () => {
  doorWithPrize = Math.floor(3 * Math.random().toFixed(2));
  // for (let i = 0; i < 10; i++) {
  // const randomNum = Math.floor(3 * Math.random().toFixed(2));
  // doors[randomNum] = 'C';
  // console.log(randomNum, Math.ceil(3 * randomNum));
  // }
};

const choose = () => {
  playerChoice = Math.floor(3 * Math.random().toFixed(2));
};

const revealDoor = () => {
  do {
    revealedDoorIndex = Math.floor(3 * Math.random().toFixed(2));
  } while (
    playerChoice === revealedDoorIndex ||
    revealedDoorIndex === doorWithPrize
  );
};

const switchChoice = () => {
  let newPlayerChoice = [0, 1, 2].filter(
    (item) => ![revealedDoorIndex, playerChoice].includes(item)
  );

  // console.log(
  //   `doorWithPrize: ${doorWithPrize}, playerChoice: ${playerChoice}, revealedDoorIndex: ${revealedDoorIndex}, newPlayerChoice: ${newPlayerChoice[0]}`
  // );
  // doorWithPrize,
  // playerChoice,
  // revealedDoorIndex,
  // newPlayerChoice[0]
  // );

  playerChoice = newPlayerChoice[0];
};

const isPlayerWinner = () => {
  // console.log(doors, playerChoice, revealedDoorIndex);
  return doorWithPrize === playerChoice;
};

const play = (doesPlayerSwitch = true) => {
  setup();

  choose();

  revealDoor();

  if (doesPlayerSwitch) {
    switchChoice();
  }

  return isPlayerWinner();
};

const totalGamesToBePlayed = 1000;

for (let i = 1; i <= totalGamesToBePlayed; i++) {
  const won = play(false);
  if (won) totalWon++;
  // console.log(`Game ${i}: ${won ? 'Won' : 'Lost'}`);
}

console.log(
  `Total Games: ${totalGamesToBePlayed}, Total Games Won: ${totalWon}, Win Percentage: ${(
    (totalWon * 100) /
    totalGamesToBePlayed
  ).toFixed(2)}`
);
