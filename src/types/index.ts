export interface Game {
  id: string;
  name: string;
  tags: string[];
  provider: string;
  gameType: string;
}
export type SearchSubmit = (searchText: string) => void;
export type CancelSearch = () => void;
