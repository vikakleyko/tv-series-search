import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import { useSearch } from "../hooks/useSearch";
import Loading from "./Loading";
import SeriesItem from "./SeriesItem";
import { TVMazeSeries } from "../lib/types";
import styled from "styled-components";

const SeriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-color: blue;
  border-radius: 10px;
  margin: 10px;
  max-width: 200px;
  padding: 10px;
  width: 100%;
`;

const Item = styled(Link)`
  text-decoration: none;
`;

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
        <SearchWrapper>
          <Input
            placeholder="Enter TV Series"
            onChange={(event) => {
              setFilter(event.target.value);
              refetch();
            }}
          />
          <SeriesContainer>
            {series.map((item, i) => (
              <Item
                key={i}
                to={{
                  pathname: `/tvseries/${item.show.id}`,
                }}
                state={{ id: item.show.id }}
              >
                <SeriesItem {...item} />
              </Item>
            ))}
          </SeriesContainer>
        </SearchWrapper>
      )}
      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}
    </>
  );
}

export default Search;
