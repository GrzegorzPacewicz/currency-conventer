import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;
  min-height: 450px;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.elementColor.background};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0;
    min-height: 415px;
  }
`;

export const Caution = styled.p`
  text-align: left;
  margin: 10px 0;
  padding: 10px 0 0 0;
  font-size: small;
  color: ${({ theme }) => theme.elementColor.text};
`;

export const FormFieldset = styled.fieldset`
  text-align: center;
  margin: 10px auto;
  padding: 15px 10px;
  min-height: 95px;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.elementColor.border};
  color: ${({ theme }) => theme.elementColor.text};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
  }
`;

export const FormLegend = styled.legend`
  text-align: left;
  border: 1px solid ${({ theme }) => theme.elementColor.border};
  padding: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  max-width: 200px;
  width: 100%;
  color: ${({ theme }) => theme.elementColor.input};
`;

export const FormSelect = styled.select`
  padding: 10px;
  max-width: 200px;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.elementColor.select};
`;

export const FormButton = styled.button`
  padding: 12px;
  margin: 10px 0;
  color: #fff;
  background: ${({ theme }) => theme.elementColor.button};
  border: 1px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.elementColor.text};
  padding-top: 150px;
`;

export const Failure = styled(Loading)`
  color: ${({ theme }) => theme.elementColor.failure};
`;
