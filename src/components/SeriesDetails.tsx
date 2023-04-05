import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useSeriesDetails } from "../hooks/useSeriesDetails";
import Loading from "./Loading";
import styled from "styled-components";

const SeriesDetails = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

const Text = styled.div`
  color: blue;
  font-weight: 500;
`;

function SerieDetails() {
  const { id } = useParams();
  const { data: serie, error, loading } = useSeriesDetails(id);

  return (
    <>
      {serie && (
        <SeriesDetails>
          <img src={serie?.image?.medium} alt={serie?.name} width="250px" />
          <Info>
            <Text>Name: {serie?.name}</Text>
            <Text>Genres: {serie?.genres?.toString()}</Text>
            <Text>Runtime: {serie?.runtime}</Text>
            <Text>Runtime: {serie?.premiered}</Text>
            <a href={serie?.url} target="_blank" rel="noreferrer">
              More info
            </a>
          </Info>
        </SeriesDetails>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  );
}

export default SerieDetails;
