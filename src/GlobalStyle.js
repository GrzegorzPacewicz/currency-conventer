import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, ::after, ::before {
      box-sizing: inherit;
    }

    body {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.color.black};
      text-align: center;
      background-image: url("${background}");
      display: flex;
      align-items: center;
      justify-content: center;
}
`;
