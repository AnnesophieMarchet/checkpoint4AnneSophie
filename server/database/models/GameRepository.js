const AbstractRepository = require("./AbstractRepository");

class GameRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "game" as configuration
    super({ table: "game" });
  }

  // The C of CRUD - Create operation

  async create(game) {
    // Execute the SQL INSERT query to add a new game to the "game" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description,genre, release_date, user_id) values (?, ?, ?,?,?)`,
      [
        game.title,
        game.description,
        game.genre,
        game.release_date,
        game.user_id,
      ]
    );

    // Return the ID of the newly inserted game
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific game by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the game
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Games from the "game" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Games
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing game

  // async update(game) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an game by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = GameRepository;
