import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;
export default function GameForm() {
  const navigate = useNavigate();
  const [games, setGames] = useState({
    title: "",
    description: "",
    genre: "",
    release_date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGames({
      ...games,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/games/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(games),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Erreur lors du rajout du jeu");
      }

      const data = await response.json();
      console.info("Success:", data);
      navigate("/game-result");
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  };
  return (
    <div className=" flex flex-col  mx-auto max-w-sm  pt-5 ">
      <div className="flex justify-center mb-20 mt-36">
        <p className="font-custom text-2xl">Add a game</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* <label htmlFor="title" className="block">
            Nom de famille
          </label> */}
          <input
            onChange={handleChange}
            value={games.title}
            type="text"
            id="title"
            name="title"
            placeholder="title"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block">
            Adresse mail
          </label> */}
          <input
            onChange={handleChange}
            value={games.description}
            type="text"
            id="description"
            name="description"
            placeholder="description"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block">
            Adresse mail
          </label> */}
          <input
            onChange={handleChange}
            value={games.genre}
            type="text"
            id="genre"
            name="genre"
            placeholder="genre"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block">
            Adresse mail
          </label> */}
          <input
            onChange={handleChange}
            value={games.release_date}
            type="date"
            id="release_date"
            name="release_date"
            placeholder="release_date"
            className="w-full  px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-colorblack focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className=" w-full bg-black  text-primary text-xl py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
