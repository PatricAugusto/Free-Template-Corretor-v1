import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #0A2342;
    --color-secondary: #C59C68;
    --color-background: #F9F9F9;
    --color-text: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif; 
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
  }
`;