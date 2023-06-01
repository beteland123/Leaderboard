const nameInputElement = document.getElementById('name-input');
const scoreInputElement = document.getElementById('score-input');

const add = async (event, game, lists) => {
  event.preventDefault();

  // Get the values from the input fields
  const name = nameInputElement.value;
  const score = scoreInputElement.value;

  // Add the score to the game
  await game.addScores(name, score);

  // Refresh the score list
  await lists(game);

  // Clear the input fields
  nameInputElement.value = '';
  scoreInputElement.value = '';
};

export default add;
