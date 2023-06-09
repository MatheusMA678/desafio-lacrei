import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;
    color: ${(props) => props.theme.colors.black};

    -webkit-font-smoothing: antialiased;
  }
`;
