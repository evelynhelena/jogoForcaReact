import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes/default";

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
            font-family: minhafont;
            src: url("/fonts/Eraser.ttf");
  }
  body {
        -webkit-font-smoothing: antialiased;
  }

  body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 1rem;
  }

  .principalBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;
