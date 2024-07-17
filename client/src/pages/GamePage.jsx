import { useLoaderData } from "react-router-dom";
import Game from "../components/Game";

export default function GamePage() {
  const games = useLoaderData();
  return (
    <>
      {games.map((game) => (
        <Game
          key={game.id}
          title={game.title}
          description={game.description}
          user={game.user_id}
        />
      ))}
    </>
  );
}
