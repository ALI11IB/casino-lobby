import { useState, useEffect } from "react";

import { Game, SearchSubmit, CancelSearch } from "../../types/game";
import { getAllGames, getGamesbyName } from "../../content/fetcher";
import { GameCard } from "../../components/ui";
import { Filter } from "../../components/ui";

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
      <section className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <Filter
          onSearchSubmit={onSearchSubmit}
          onCancelSearch={onCancelSearch}
        />
      </section>

      <section className="grid xsm:grid-cols-1 sm:m-10 xsm:m-10  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </>
  );
}
