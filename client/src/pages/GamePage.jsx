import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Game from "../components/Game";
import { useUserContext } from "../context/UserContext";

export default function GamePage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { logout, user } = useUserContext();
  const [games, setGames] = useState([]);
  const [setGameId] = useState(null);
  const notifyInfo = (text) => toast.info(text);

  // Charger les données initiales des jeux
  const loadGames = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/games`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGames(data);
      } else if (response.status === 401) {
        logout(true);
      } else {
        notifyInfo("Impossible de charger les jeux");
      }
    } catch (error) {
      console.error("Erreur lors du chargement des jeux :", error);
      notifyInfo("Erreur lors du chargement des jeux");
    }
  };

  // Supprimer un jeu
  const deleteGame = async (id) => {
    try {
      const response = await fetch(`${ApiUrl}/api/games/delete`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        notifyInfo("Jeu supprimé avec succès");
        // Mettre à jour la liste des jeux localement
        setGames((prevGames) => prevGames.filter((game) => game.id !== id));
      } else {
        notifyInfo("Erreur lors de la suppression du jeu");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du jeu :", error);
      notifyInfo("Erreur lors de la suppression du jeu");
    }
  };

  // Gérer le clic sur un jeu pour afficher les détails
  const handleGameClick = (id) => {
    setGameId(id);
    navigate(`/game-result/${id}`);
  };

  useEffect(() => {
    if (user !== "null" && user !== null) {
      loadGames();
    } else {
      navigate("/login-page");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, logout]);

  return (
    <>
      <div className="flex flex-col items-center mt-10 ">
        {/* <div className="flex mt-8 mb-8">
          <p className="text-4xl text-colorblack">{`Welcome ${user.username}`}</p>
        </div> */}

        {/* <div className="mb-8">
          <Link to="/game-form">
            <button
              type="button"
              className="bg-black text-colorwhite text-xl py-2 px-4 rounded-md"
            >
              Add game
            </button>
          </Link>
        </div> */}
      </div>

      {games.map((game) => (
        <div key={game.id} className="flex justify-end">
          <Game
            onDeleteClick={() => deleteGame(game.id)}
            onDetailClick={() => handleGameClick(game.id)}
            title={game.title}
            description={game.description}
            user={game.user_id}
            id={game.id}
          />
        </div>
      ))}
    </>
  );
}
