import styled from "styled-components";

export const Container = styled.main`
  overflow-x: auto;
  margin: 10px;
  width: 450px;
  flex-basis: 700px;
  border-radius: 30px;
  box-shadow: 0 0 10px black;
  background-color: aliceblue;
  padding-bottom: 20px;

  @media (max-width: 767px) {
    width: 350px;
    border-radius: 0;
    box-shadow: none;
    flex-basis: 700px;
    min-width: 300px;
    background-color: aliceblue;
    padding-bottom: 20px;
    margin: 0 10px;
    padding: 0 10px;
  }
`;
