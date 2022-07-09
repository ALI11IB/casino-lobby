import { useEffect, useState } from "react";
import data from "../../content/games.json";
import { Game } from "../../types";
export function useFetch(pageNumber: number, query?: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [searchedGames, setSearchedGames] = useState<Game[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let res: Game[] = [];
    if (query && query.length) {
      res = data.filter((game: Game) =>
        game.name.toLowerCase().includes(query)
      );
      setSearchedGames(res);
    } else {
      setSearchedGames([]);

      res = data.slice(pageNumber * 10, (pageNumber + 1) * 10);
      setGames((prevGames: Game[]) => {
        return [...prevGames, ...res];
      });
    }

    setHasMore(data.length > pageNumber * 10);
    setLoading(false);
  }, [pageNumber, query]);

  return { loading, error, games, searchedGames, hasMore };
}

export const getGameById = (gameId: string) => {
  return {
    data: data.filter((game: Game) => game.id === gameId),
  };
};
