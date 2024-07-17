// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const users = await tables.user.readAll();

    // Respond with the offers in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const user = req.body;

    // Créer un nouvel utilisateur
    const insertUserId = await tables.user.create(user);
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
const getProfile = async (req, res, next) => {
  try {
    const { sub } = req.auth;

    const user = await tables.user.read(sub);
    delete user.hashed_password;
    if (user === null) {
      return res.sendStatus(404);
    }

    return res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
  read,
  getProfile,
};
