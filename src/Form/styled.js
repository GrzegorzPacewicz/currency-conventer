import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;
  min-height: 450px;
  background: ${({ theme }) => theme.color.pastelgreen};
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
`;

export const FormFieldset = styled.fieldset`
  text-align: center;
  margin: 10px auto;
  padding: 15px 10px;
  min-height: 95px;
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
  max-width: 200px;
  width: 100%;
`;

export const FormSelect = styled.select`
  padding: 10px;
  max-width: 200px;
  text-align: center;
  width: 100%;
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
  padding-top: 150px;
 `;

export const Failure = styled(Loading)`
  color: ${({ theme }) => theme.color.red};
 `;
