import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
   }
`;

function App() {
   return (
      <>
         <GlobalStyle />
         <Home />
      </>
   )
};

export default App;