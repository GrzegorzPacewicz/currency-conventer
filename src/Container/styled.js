import styled from "styled-components";

export const Container = styled.main`
  overflow-x: auto;
  margin: 10px;
  width: 450px;
  flex-basis: 700px;
  border-radius: 30px;
  box-shadow: 0 0 10px ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.pastelgreen};
  padding-bottom: 20px;
  min-height: 660px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 350px;
    border-radius: 0;
    box-shadow: none;
    padding: 0 10px;
  }
`;
