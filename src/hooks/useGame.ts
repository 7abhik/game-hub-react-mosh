import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: { genres: gameQuery.genre?.id, platforms: gameQuery.platformId },
    },
    [gameQuery],
  );
  return { data, error, isLoading };
};

export default useGame;
