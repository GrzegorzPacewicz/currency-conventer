import styled from "styled-components";

export const StyledFooter = styled.div`
  font-family: Roboto mono, sans-serif;
  padding: 10px 20px 0 20px;
  font-size: small;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px 0;
   
  }
`;
