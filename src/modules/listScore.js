const lists = async (game) => {
  const list = document.querySelector('.lists');
  try {
    const scores = await game.getScore();
    list.innerHTML = '';
    scores.forEach((element) => {
      const listElement = document.createElement('div');
      listElement.innerHTML = `<span class="name">${element.user} : </span><span class="score">${element.score}</span>`;
      list.appendChild(listElement);
    });
  } catch (error) {
    list.innerHTML = '<div><span>There was an error refreshing the scores<span></div>';
  }
};

export default lists;
