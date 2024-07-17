const AbstractSeeder = require("./AbstractSeeder");

const users = [
  {
    username: "Anne-sophie",
    email: "wildcodeschool@gmail.com",
    hashed_password: "eznd$zdcjé",
  },
  {
    username: "cacaca",
    email: "sanofi@hotmail.fr",
    hashed_password: "xjuéuuec",
  },
  {
    username: "pipi",
    email: "johndoe@yahoo.com",
    hashed_password: "iieze_ezkje",
  },
];
class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    users.forEach((user) => {
      const values = {
        username: user.username,
        email: user.email,
        hashed_password: user.hashed_password,
      };
      this.insert(values);
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
