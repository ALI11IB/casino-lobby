import { useState, useEffect } from "react";

import { Game, SearchSubmit, CancelSearch } from "../../types";
import { getAllGames, getGamesbyName } from "../../content/fetcher";
import { GameCard, Filter } from "../../components/ui";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const result = getAllGames();
    setGames(result.data);
  }, []);
  const onSearchSubmit: SearchSubmit = (searchText: string) => {
    const result = getGamesbyName(searchText);
    setGames(result.data);
  };
  const onCancelSearch: CancelSearch = () => {
    const result = getAllGames();
    setGames(result.data);
  };
  return (
    <>
      <section className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 sm:mx-10 xsm:mx-10">
        <Filter
          onSearchSubmit={onSearchSubmit}
          onCancelSearch={onCancelSearch}
        />
      </section>

      <section className="grid xsm:grid-cols-1   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 sm:m-10 xsm:m-10">
        {games.map((game, index) => (
          <GameCard game={game} key={game.id} index={index} />
        ))}
      </section>
    </>
  );
}
