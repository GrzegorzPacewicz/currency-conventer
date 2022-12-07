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
      color: #222227;
      margin: 0 auto;
      padding: 0 20px;
      text-align: center;
      background-image: url("${background}");
      display: flex;
      align-items: center;
      justify-content: center;
}

@media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) 
 {
    background-image: none;
    margin: 0 10px;
    padding: 10px;
}
`;