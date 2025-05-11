import Header from "../components/Header/Header";
import PokemonCards from "../components/PokemonCards/PokemonCards";
import styled from "styled-components";

const HomeContainer = styled.main`
   color: 
   ${({ theme }) => (theme.background === "radial-gradient(circle at top, #fce43b 0%, #ff6666 100%)" ?
      "#000" : "#fff")};
`;

function Home() {
   return (
      <>
         <Header />
         <HomeContainer>
            <PokemonCards />
         </HomeContainer>
      </>
   )
};

export default Home;