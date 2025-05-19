import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
         </Routes>
      </BrowserRouter>
   )
};

export default App;