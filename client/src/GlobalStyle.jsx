import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1024px;

    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #666;
    --darkGrey: #333;
    --black: #000;

    --accent: #005eb8;
    --accentLight: #248bed;
    --accentDark: #043e75;

    --alert: #ff5d2b;
    --alertLight: #FF8762;
    
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;

    --textShadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  * {
    box-sizing: boarder-box;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: var(--darkGrey);
    

    h1 {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
      display: flex;
      align-contents: center;
      justify-content: center;
    }
    h2 { 
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--white);
      font-weight: 600;
    }
    h3 {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--white);
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
    li {
      color: var(--white);
    }

    a {
      color: var(--accent);
      text-decoration: none;
    }
    a:hover {
      color: var(--accentLight);
      text-decoration: underline;
    }
  }
  
`;
