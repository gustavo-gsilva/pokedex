import Header from "../components/Header/Header";
import PokemonCards from "../components/PokemonCards/PokemonCards";
import styled from "styled-components";

const HomeContainer = styled.main`
   display: flex;
   justify-content: center;

   color: 
   ${({ theme }) => (theme.background === "radial-gradient(circle at top, #E8F5E9 0%, #A5D6A7 70%)" ?
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