import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;

  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

`;

export default GlobalStyles;
