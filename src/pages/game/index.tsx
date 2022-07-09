import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Game } from "../../types";
import { getGameById } from "../../components/common/useFetch";
import { GameDetails } from "../../components/ui";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const { gameId } = useParams();

  useEffect(() => {
    const result = getGameById(gameId!);
    setGames(result.data);
  }, [gameId]);

  return (
    <>
      <section className="grid xsm:grid-cols-2   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-5 sm:m-10 xsm:m-10 h-screen">
        {games.length && <GameDetails game={games[0]} />}
      </section>
    </>
  );
}
