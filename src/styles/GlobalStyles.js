import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
   }

   html {
      height: 100vh;
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%;
   }

   body {
      background: ${({ theme }) => theme.background};
   }
`;

export default GlobalStyle;