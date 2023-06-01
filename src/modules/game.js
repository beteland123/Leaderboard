class Game {
  constructor() {
    this.id = 'hD3SsjUFdslkX5LTjKxj';
    this.gameName = 'wakanda 2023 game';
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  }

  async getScore() {
    try {
      const response = await fetch(`${this.url}/${this.id}/scores`);
      const scores = await response.json();
      return scores.result;
    } catch (error) {
      return [];
    }
  }

  async addScores(name, score) {
    try {
      const response = await fetch(`${this.url}/${this.id}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name, score }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }
}

export default Game;
