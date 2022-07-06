import games from "./games.json";
import { Game } from "../types/game";

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
