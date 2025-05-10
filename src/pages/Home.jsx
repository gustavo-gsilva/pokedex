import Header from "../components/Header/Header";
import PokemonCards from "../components/PokemonCards/PokemonCard";
import styled from "styled-components";

const HomeContainer = styled.main`
   background-color: ${({ theme }) => theme.background};
   color: ${({ theme }) => (theme.background === "#1b1b1b" ? "#fff" : "#000")};
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