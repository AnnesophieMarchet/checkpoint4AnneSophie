import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function HomePage() {
  const { user } = useUserContext();

  return (
    <div className="pt-5">
      {user ? (
        <div className="flex justify-end mr-20 mt-10">
          <Link to="/game-form">
            <button
              type="button"
              className="bg-black text-primary text-xl py-2 px-4 rounded-md"
            >
              Add game
            </button>
          </Link>
        </div>
      ) : (
        <Link to="./sign-up-page">
          <div className="flex justify-end mr-20 mt-10">
            <button
              type="submit"
              className="  bg-black  text-colorwhite text-xl py-2 px-4 rounded-md"
            >
              Start
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
