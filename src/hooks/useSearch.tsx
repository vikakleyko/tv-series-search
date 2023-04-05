import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { TVMazeSeries } from "../lib/types";

export const useSearch = (filter: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${filter}`);
    setLoading(false);
    return res.json();
  };

  const { data, refetch, error } = useQuery<TVMazeSeries[]>(
    "tvseries",
    fetchData,
    {
      staleTime: 3000,
    }
  );

  useEffect(() => {
    setLoading(true);
  }, []);

  return { data, loading, error, refetch };
};
