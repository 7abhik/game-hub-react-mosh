import useData from "./useData";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const { data } = useData<Platform>("/platforms/lists/parents");
  return { data };
};

export default usePlatform;
