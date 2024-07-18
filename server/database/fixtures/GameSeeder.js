const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const games = [
  {
    title: "Zelda",
    description: "tears of kingdom",
    genre: "combat",
    release_date: "2020-01-21",
    user_id: 1,
  },
  {
    title: "Zelda et link ",
    description: "tears of kingdom",
    genre: "combat",
    release_date: "2020-01-21",
    user_id: 2,
  },
  {
    title: "Zelda Breath of the wild ",
    description: "tears of kingdom",
    genre: "combat",
    release_date: "2020-01-21",
    user_id: 3,
  },
];

class GameSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "game", dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'game' table with fake data
  run() {
    games.forEach((game) => {
      const values = {
        title: game.title,
        description: game.description,
        genre: game.genre,
        release_date: game.release_date,
        user_id: game.user_id,
      };
      this.insert(values);
    });
  }
}

// Export the gameSeeder class
module.exports = GameSeeder;
