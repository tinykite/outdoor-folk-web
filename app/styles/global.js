import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

:root {
  --color-background: #FFE9DC;
  --color-text: #0C3E4D;
}

::selection {
  background: #ffb7b7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #ffb7b7; /* Gecko Browsers */
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: var(--color-background);
    color: var(--color-text);
    transition: background 0.25s ease-in-out;
    font-family: Avenir, sans-serif;
    line-height: 1.5;
    font-size: 1.125rem;
    font-size: var(--font-size);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a:link, a:visited, a:focus, a:active {
    color: inherit;  
  }

  a:not(.active, :hover, :focus) {
    text-decoration: none;
  }
`;
