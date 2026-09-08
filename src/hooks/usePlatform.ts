import useData from "./useData";

interface Platform {
  id: number;
  name: string;
}

const usePlatform = () => {
  const { data } = useData<Platform>("/platforms/lists/parents");
  return { data };
};

export default usePlatform;
