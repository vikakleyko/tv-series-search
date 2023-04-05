import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useSeriesDetails } from "../hooks/useSeriesDetails";
import Loading from "./Loading";
import styled from "styled-components";

const SeriesDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

function SerieDetails() {
  const { id } = useParams();
  const { data: serie, error, loading } = useSeriesDetails(id);

  return (
    <>
      {serie && (
        <SeriesDetails>
          <img src={serie?.image?.medium} alt={serie?.name} width="200px" />
          <div>Name: {serie?.name}</div>
          <div>Genres: {serie?.genres?.toString()}</div>
          <div>Runtime: {serie?.runtime}</div>
          <a href={serie?.url}>More info</a>
        </SeriesDetails>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  );
}

export default SerieDetails;
