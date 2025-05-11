import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
   }

   body {
      background: ${({ theme }) => theme.background};
   }
`;

export default GlobalStyle;