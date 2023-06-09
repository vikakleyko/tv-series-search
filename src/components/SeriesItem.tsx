import styled from "styled-components";
import { TVMazeSeries } from "../lib/types";

const Series = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 200px;
`;

const Text = styled.div`
  color: blue;
  padding-top: 5px;
`;

function SeriesItem(item: TVMazeSeries) {
  const {
    score,
    show: { image, name },
  } = item;

  return (
    <Series>
      <img src={image?.medium} alt={name} />
      <Text>Name: {name}</Text>
      <Text>Score: {score}</Text>
    </Series>
  );
}

export default SeriesItem;
