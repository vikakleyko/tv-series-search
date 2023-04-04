import { useState, useEffect, useCallback } from "react";
import { Series } from "../types";

export const useSeriesDetails = (id: string | undefined) => {
  const [data, setData] = useState<Series>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchResponse = useCallback(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    setLoading(true);
    fetchResponse();
  }, [fetchResponse]);

  return { data, loading, error };
};
