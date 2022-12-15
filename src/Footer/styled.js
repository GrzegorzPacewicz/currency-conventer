import styled from "styled-components";

export const StyledFooter = styled.div`
  font-family: Roboto mono, sans-serif;
  padding: 10px 20px;
  font-size: small;
  text-align: left;
  text-decoration: none; 
  color: black;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px 0;
   
  }
`;

export const Link = styled.a`
color: black;
text-decoration: none;
`;

export const Paragraph = styled(StyledFooter)`
padding: 10px 0;
`;