import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styles from "./Game.module.css";

function Game({ id, title, description, onDeleteClick, onDetailClick }) {
  const notifyInfo = (text) => toast.info(text);

  const handleDeleteClick = async () => {
    try {
      await onDeleteClick(id);
    } catch (error) {
      console.error("Erreur lors de la suppression du jeu :", error);
      notifyInfo("Erreur lors de la suppression du jeu");
    }
  };

  return (
    <div
      className={`${styles.gameCard} bg-white bg-opacity-60 p-4 m-4 rounded-lg shadow-lg border-2 border-gray-200`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {/* <p className="text-gray-600">Utilisateur ID: {user}</p> */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="button"
          onClick={onDetailClick}
          className="bg-secondary text-primary px-3 py-1 rounded-md hover:bg-secondary-100"
        >
          Details
        </button>
        <button
          type="button"
          onClick={handleDeleteClick}
          className="bg-secondary text-primary px-3 py-1 rounded-md hover:bg-secondary-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Game.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDetailClick: PropTypes.func.isRequired,
};

export default Game;
