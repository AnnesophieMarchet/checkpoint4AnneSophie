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
  }, [user, id, navigate]);

  if (!gameDetails) {
    return <div>Chargement des détails du jeu...</div>;
  }

  return (
    <>
      <div className="flex justify-center mb-20 mt-36">
        <p className="font-custom text-4xl text-gray-800">
          {gameDetails.title}
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-md p-20 bg-secondary opacity-80   rounded-lg shadow-xl ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {gameDetails.title}:
        </h2>
        <p className="text-primary mb-2">
          Description : {gameDetails.description}
        </p>
        <p className="text-primary mb-2">Genre : {gameDetails.genre}</p>
        <p className="text-primary mb-2">Sortie : {gameDetails.release_date}</p>
      </div>
    </>
  );
}

export default GameResultPage;
