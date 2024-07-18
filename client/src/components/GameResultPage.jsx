import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

function GameResultPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const { logout, user } = useUserContext();
  const [gameDetails, setGameDetails] = useState(null);
  const navigate = useNavigate();
  const notifyInfo = (text) => toast.info(text);

  const loadGameDetails = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/games/${id}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        setGameDetails(data);
      } else if (response.status === 401) {
        logout(true);
      } else {
        notifyInfo("Impossible de charger les détails du jeu");
      }
    } catch (error) {
      console.error("Erreur lors du chargement des détails du jeu :", error);
      notifyInfo("Erreur lors du chargement des détails du jeu");
    }
  };

  // Charger les détails du jeu lorsque le composant est monté
  useEffect(() => {
    if (user !== "null" && user !== null) {
      loadGameDetails();
    } else {
      navigate("/login-page");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, id]);

  if (!gameDetails) {
    return <div>Chargement des détails du jeu...</div>;
  }

  return (
    <div>
      <h2>{gameDetails.title}</h2>
      <p>{gameDetails.description}</p>
      <p>Utilisateur ID: {gameDetails.user_id}</p>

      <p>Genre: {gameDetails.genre}</p>
      <p>Date de sortie: {gameDetails.release_date}</p>
    </div>
  );
}

export default GameResultPage;
