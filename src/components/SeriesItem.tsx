import styled from "styled-components";
import { TVMazeSeries } from "../lib/types";

const Series = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 200px;
`;

function SeriesItem(item: TVMazeSeries) {
  const {
    score,
    show: { image, name },
  } = item;

  return (
    <Series>
      <img src={image?.medium} alt={name} />
      <div>Name: {name}</div>
      <div>Score: {score}</div>
    </Series>
  );
}

export default SeriesItem;
