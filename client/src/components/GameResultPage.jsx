import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
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
      <div className="flex justify-center mb-20 mt-36 ">
        <p className="font-custom text-4xl font-bold text-gray-800">
          {gameDetails.title}
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-md p-10 bg-white bg-opacity-60   rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Game :{gameDetails.title}
        </h2>
        <p className="text-gray-800 mb-2">
          Description : {gameDetails.description}
        </p>
        <p className="text-gray-800 mb-2">Genre : {gameDetails.genre}</p>
        <p className="text-gray-800 mb-2">
          Date : {formatDate(gameDetails.release_date)}
        </p>
        <Link to="/game-result" className="mt-4 text-center">
          <button
            type="button"
            className="bg-secondary text-white px-4 py-2 rounded-md"
          >
            Back to game list
          </button>
        </Link>
      </div>
    </>
  );
}

export default GameResultPage;

// bg-white bg-opacity-60 p-4 m-4 rounded-lg shadow-lg border-2 border-gray-200
