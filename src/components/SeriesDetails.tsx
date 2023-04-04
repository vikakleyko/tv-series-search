import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useSeriesDetails } from "./hooks/useSeriesDetails";
import Loading from "./Loading";

const SeriesDetailsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
};

function SerieDetails() {
  const { id } = useParams();
  const { data: serie, error, loading } = useSeriesDetails(id);

  return (
    <>
      {serie && (
        <div style={SeriesDetailsStyle as React.CSSProperties}>
          <img src={serie?.image?.medium} alt={serie?.name} width="200px" />
          <div>Name: {serie?.name}</div>
          <div>Genres: {serie?.genres?.toString()}</div>
          <div>Runtime: {serie?.runtime}</div>
          <a href={serie?.url}>More info</a>
        </div>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </>
  );
}

export default SerieDetails;
