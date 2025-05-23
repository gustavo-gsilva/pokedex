import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./pages/Home";
import PokemonDetailsPage from './pages/PokemonDetailsPage';

function App() {
   return (
      <BrowserRouter basename='/pokedex'>
         <GlobalStyle />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
         </Routes>
      </BrowserRouter>
   )
};

export default App;