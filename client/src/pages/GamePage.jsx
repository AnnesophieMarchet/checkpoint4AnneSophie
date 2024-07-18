import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Game from "../components/Game";
import { useUserContext } from "../context/UserContext";

export default function GamePage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  // const { Id } = useParams();
  const navigate = useNavigate();
  const { logout, user } = useUserContext();
  const [games, setGames] = useState([]);
  // const [userData, setUserData] = useState(null);
  const [setGameId] = useState(null);
  // const [showModal, setShowModal] = useState(false);
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

  // const handleLogout = () => {
  //   logout(false);
  //   notifyInfo(`A bientôt ${user.username}`);
  // };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex mt-8 mb-8 ">
          <p className=" text-4xl text-colorblack ">{`Welcome ${user.username}`}</p>
        </div>

        <div className=" mb-8">
          <Link to="/game-form">
            <button
              type="button"
              // className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-primary-dark"
              className="  bg-black  text-colorwhite text-xl py-2 px-4 rounded-md"
            >
              Add game
            </button>
          </Link>
        </div>
      </div>

      {/* <button
        type="button"
        onClick={handleLogout}
        className="flex justify-center mx-auto"
      >
        Disconect
      </button> */}
      {games.map((game) => (
        <Link
          key={game.id}
          to={`/game-result/${game.id}`}
          onClick={() => handleGameClick(game.id)}
        >
          <div className="flex justify-end">
            <Game
              title={game.title}
              description={game.description}
              user={game.user_id}
            />
          </div>
        </Link>
      ))}
      {/* {gameId && (
        <div>
          <h2>Détails du jeu :</h2>
  
        </div>
      )} */}
    </>
  );
}
