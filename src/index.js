import './style.css';
import add from './modules/addScore.js';
import Game from './modules/game.js';
import lists from './modules/listScore.js';

const game = new Game();

document.querySelector('#add-btn').addEventListener('click', (event) => {
  add(event, game, lists);
});

const refreshButton = document.querySelector('#ref');
refreshButton.addEventListener('click', async () => {
  await lists(game);
});
