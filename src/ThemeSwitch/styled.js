import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 20px 20px;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: ${({ theme }) => theme.color.teal};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.color.black};

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
