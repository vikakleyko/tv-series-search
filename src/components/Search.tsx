import { useEffect, CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import { useSearch } from "../hooks/useSearch";
import Loading from "./Loading";
import SeriesItem from "./SeriesItem";
import { TVMazeSeries } from "../lib/types";

const SearchWrapperStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  "@media (maxWidth: 500px)": {
    justifyContent: "center",
  },
};

const SeriesContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const InputStyle = {
  borderColor: "blue",
  borderRadius: "10px",
  margin: "10px",
  maxWidth: "200px",
  padding: "10px",
  width: "100%",
};

const SeriesItemStyle = {
  textDecoration: "none",
};

function Search() {
  const [filter, setFilter] = useState("");
  const [series, setSeries] = useState<TVMazeSeries[]>([]);
  const { data, isLoading, isError, isFetching, refetch } = useSearch(filter);

  useEffect(() => {
    setSeries(data ?? []);
  }, [data]);

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
                style={SeriesItemStyle}
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
      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}
    </>
  );
}

export default Search;
