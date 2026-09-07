import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
}

const useGame = () => {
  const { data, error, isLoading } = useData<Genres>("/genres");
  return { data, error, isLoading };
};

export default useGame;
