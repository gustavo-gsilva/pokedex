import Header from "../components/Header/Header";
import PokemonCards from "../components/PokemonCards/PokemonCards";
import styled from "styled-components";

const HomeContainer = styled.main`
   display: flex;
   justify-content: center;
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