import styled from "styled-components";

export const StyledHeader = styled.header`
  font-size: 28px;
  font-weight: 700;
  background: ${({ theme }) => theme.elementColor.background};
  color: ${({ theme }) => theme.elementColor.text};
  padding: 20px;
`;
