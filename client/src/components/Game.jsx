import PropTypes from "prop-types";

function Game({ title, description, user }) {
  return (
    <div className="game">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Utilisateur ID: {user}</p>
    </div>
  );
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
};

export default Game;
