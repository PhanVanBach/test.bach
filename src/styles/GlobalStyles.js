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
  font-weight: 400;
  color: #555;
  line-height: 1;
}

`;

export default GlobalStyles;
