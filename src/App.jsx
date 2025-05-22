import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route, HashRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./pages/Home";
import PokemonDetailsPage from './pages/PokemonDetailsPage';

function App() {
   return (
      <HashRouter>
         <GlobalStyle />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
         </Routes>
      </HashRouter>
   )
};

export default App;