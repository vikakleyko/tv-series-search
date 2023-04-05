import { CSSProperties } from "react";
import { TVMazeSeries } from "../lib/types";

const SeriesItemStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  width: "200px",
};

function SeriesItem(item: TVMazeSeries) {
  const {
    score,
    show: { image, name },
  } = item;

  return (
    <div style={SeriesItemStyle as CSSProperties}>
      <img src={image?.medium} alt={name} />
      <div>Name: {name}</div>
      <div>Score: {score}</div>
    </div>
  );
}

export default SeriesItem;
