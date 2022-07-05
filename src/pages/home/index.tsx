import { useState, useEffect } from "react";

import { Game } from "../../types/game";
import { getAllGames } from "../../content/fetcher";
import { GameCard } from "../../components/ui";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const result = getAllGames();
    setGames(result.data);
  }, []);
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </section>
  );
}
