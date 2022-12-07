import styled from "styled-components";

export const StyledClock = styled.div`
  padding: 20px 20px 0 0;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px 0 10px 0;
    margin: 0;
  }
`;
