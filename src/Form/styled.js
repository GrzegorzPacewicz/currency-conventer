import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.pastelgreen};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0;
  }
`;

export const Caution = styled.p`
  text-align: left;
  margin: 10px 0;
  padding: 10px 0 0 0;
  font-size: small;
`;

export const FormResult = styled.p`
  text-align: center;
  margin: 0;
  padding: 0 0 10px;
`;

export const FormFieldset = styled.fieldset`
  text-align: center;
  margin: 10px auto;
  padding: 15px 10px;
  border: 1px solid ${({ theme }) => theme.color.teal};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
  }
`;

export const FormLegend = styled.legend`
  text-align: left;
  border: 1px solid ${({ theme }) => theme.color.teal};
  padding: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-left: 5px;
  text-align: center;
`;

export const FormSelect = styled.select`
  padding: 10px;
`;

export const FormButton = styled.button`
  padding: 12px;
  margin: 10px 0;
  color: #fff;
  background: ${({ theme }) => theme.color.teal};
  border: 1px;
  width: 100%;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.color.teal};
padding: 200px 0;
@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 182px 0;
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.red};
padding: 200px 0;
@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 172px 0;
`;
