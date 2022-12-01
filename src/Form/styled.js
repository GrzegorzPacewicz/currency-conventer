import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;
  background: aliceblue;

  @media (max-width: 767px) {
    padding: 0;
    margin: 0;
  }
`;

export const Caution = styled.p`
  text-align: left;
  margin: 10px 0;
`;

export const FormFieldset = styled.fieldset`
  text-align: center;
  margin: 10px auto;
  padding: 10px;
`;

export const FormLegend = styled.legend`
  text-align: left;
  border: 1px solid #333;
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
  color: #fff;
  background: hsl(189, 67%, 35%);
  border: 1px;
  width: 100px;

  &:hover {
    background: hsl(189, 67%, 42%);
  }

  .&:active {
    background: hsl(189, 67%, 50%);
  }
`;

export const FormButtonReset = styled.button`
  padding: 12px;
  color: #fff;
  background: hsl(189, 67%, 35%);
  border: 1px;
  width: 100%;
  
  &:hover {
    background: hsl(189, 67%, 42%);
  }

  .&:active {
    background: hsl(189, 67%, 50%);
  }
`;
