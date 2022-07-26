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
  :root {
    --color-text-primary: #FFF;
    --color-bg-primary: #252525;
  }

  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    transition: background 0.25s ease-in-out;
    font-family: Avenir, sans-serif;
    line-height: 1.5;
    font-size: 1.125rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .light {
    --color-text-primary: #252525;
    --color-bg-primary: #FFF;
  }

  a:link, a:visited, a:focus, a:active {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
