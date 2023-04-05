import styled from "styled-components";

const Text = styled.div`
  display: flex;
  justify-content: center;
`;

function Error() {
  return <Text>Something went wrong, please try again later</Text>;
}

export default Error;
