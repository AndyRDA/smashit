import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
}

:root {
  --bg-color: 0 0% 0%;
  --accent-color: 189 86% 53%;
  --bg-contrast: 0 100% 100%;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100vw;
  /* background-color: pink; */
  background-color: hsl(var(--bg-color));
  color: hsl(var(--bg-contrast));
  font-family: "Poppins", sans-serif;
  margin: 0;
}

`;

export default GlobalStyle;
