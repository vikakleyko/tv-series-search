import { useEffect, CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import { useSearch } from "../hooks/useSearch";
import Loading from "./Loading";
import SeriesItem from "./SeriesItem";
import { TVMazeSeries } from "../lib/types";

const SearchWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (maxWidth: 500px)": {
    justifyContent: "center",
  },
};

const SeriesContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  textDecoration: "none",
};

const InputStyle = {
  width: "100%",
  maxWidth: "200px",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  borderColor: "blue",
};

function Search() {
  const [filter, setFilter] = useState("");
  const [series, setSeries] = useState<TVMazeSeries[]>([]);
  const { data, loading, error, refetch } = useSearch(filter);

  useEffect(() => {
    setSeries(data ?? []);
  }, [data, loading]);

  return (
    <>
      {series && (
        <div style={SearchWrapperStyle as CSSProperties}>
          <input
            style={InputStyle as CSSProperties}
            placeholder="Enter TV Serie"
            onChange={(event) => {
              setFilter(event.target.value);
              refetch();
            }}
          />
          <div style={SeriesContainerStyle as CSSProperties}>
            {series.map((item, i) => (
              <Link
                key={i}
                to={{
                  pathname: `/tvseries/${item.show.id}`,
                }}
                state={{ id: item.show.id }}
              >
                <SeriesItem {...item} />
              </Link>
            ))}
          </div>
        </div>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  );
}

export default Search;
