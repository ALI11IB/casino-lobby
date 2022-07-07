import games from "./games.json";
import { Game } from "../types";

export const getAllGames = () => {
  return {
    data: games,
  };
};
export const getGamesbyName = (searchText: string) => {
  return {
    data: games.filter((game: Game) =>
      game.name.toLowerCase().includes(searchText)
    ),
  };
};
export const getGameById = (gameId: string) => {
  console.log(gameId, "id222222");

  return {
    data: games.filter((game: Game) => game.id === gameId),
  };
};
