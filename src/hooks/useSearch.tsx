import { useQuery } from "react-query";
import { TVMazeSeries } from "../lib/types";

export const useSearch = (filter: string | undefined) => {
  const fetchData = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${filter}`);
    return res.json();
  };

  const { data, refetch, isError, isLoading, isFetching } = useQuery<
    TVMazeSeries[]
  >("tvseries", fetchData, {
    staleTime: Infinity,
  });

  return { data, isLoading, isError, isFetching, refetch };
};
