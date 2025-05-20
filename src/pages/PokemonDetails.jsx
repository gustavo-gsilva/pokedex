import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const MainContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   height: 79vh;
`;

const ContentWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 35px;
   background: ${({ theme }) => theme.backgroundPokemonList};
   width: 55dvw;
   height: 65dvh;
   border-radius: 13px;
   position: relative;
`;

const PokemonHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;

const PokemonName = styled.h1`
   font-size: 2.5rem;

   &::first-letter {
      text-transform: uppercase;
   }
`;

const PokemonNumber = styled.p`
   font-size: 2.5rem;
`;

const IconClose = styled.i`
   font-size: 2.5rem;
   border: 2px solid ${({ theme }) => theme.borderIcon};
   width: 30px;
   height: 30px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   position: absolute;
   right: 3%;
   padding: 17px;
`;

const PokemonDetails = styled.div`
   display: flex;
   align-items: center;
   gap: 35px;
`;

const PokemonImage = styled.img`
   width: 300px;
   background: ${({ theme }) => theme.backgroundPokemonImage};
   border-radius: 13px;
   padding: 13px;
`;

const PokemonInfo = styled.div`
   display: flex;
   gap: 50px;
   background: ${({ theme }) => theme.backgroundPokemonImage};
   border-radius: 13px;
   width: 356px;
   height: 220px;
   padding: 16px 20px;
`;

const InfoBlock = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

const InfoTitle = styled.strong`
   font-size: 1.6rem;
`;

const InfoValue = styled.p`
   font-size: 1.4rem;
`;

const MoveList = styled.ul`
   overflow-y: scroll;

   &::-webkit-scrollbar {
      display: none;
}
`;

const Move = styled.li`
   font-size: 1.4rem;
`;

const slideRight = keyframes`
   from {
      transform: translateX(-70px);
      opacity: 0;
}
   to {
      transform: translateX(0);
      opacity: 1;
}
`;

const LoadingScreen = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   font-size: 1.5rem;
   background: ${({ theme }) => theme.backgroundPokemonList};
   animation: ${slideRight} 0.3s ease forwards;
`;

const jump = keyframes`
   0% {
      transform: translateY(0);
   }
   30% {
      transform: translateY(-20px);
   }
   50% {
      transform: translateY(0);
   }
   70% {
      transform: translateY(-10px);
   }
   100% {
      transform: translateY(0);
   }
`;

const LoadingScreenIcon = styled.img`
   width: 60px;
   animation: ${jump} 1s ease-in-out infinite;
   filter: ${({ theme }) => theme.iconFilter};
`;

function PokemonsDetails() {
   const { name } = useParams();
   const [pokemon, setPokemon] = useState(null);
   const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate(-1);
   };

   useEffect(() => {
      async function fetchPokemonDetails() {
         setLoading(true);

         try {
            await new Promise(resolve => setTimeout(resolve, 1100));

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();

            setPokemon({
               id: data.id,
               name: data.name,
               image: data.sprites.other["official-artwork"].front_default,
               types: data.types.map(t => t.type.name).join(", "),
               height: data.height,
               weight: data.weight,
               abilities: data.abilities.map(a => a.ability.name).join(", "),
               moves: data.moves.map(m => m.move.name),
            });
         } catch (error) {
            console.error("Erro ao buscar detalhes do Pokémon:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchPokemonDetails();
   }, [name]);

   if (loading) {
      return (
         <LoadingScreen>
            <LoadingScreenIcon src='/assets/images/pokebola.png' alt='Pokébola Ícone' />
         </LoadingScreen>
      )
   }

   if (!pokemon) {
      return <p>Pokémon não encontrado.</p>
   }

   return (
      <>
         <Header />
         <MainContainer>
            <ContentWrapper>
               <PokemonHeader>
                  <PokemonName>{pokemon.name}</PokemonName>

                  <PokemonNumber><strong>N°</strong> {pokemon.id}</PokemonNumber>

                  <IconClose onClick={handleNavigate} className="fa-regular fa-x fa-rotate-180" />
               </PokemonHeader>

               <PokemonDetails>
                  <PokemonImage src={pokemon.image} alt={pokemon.name} />

                  <PokemonInfo>
                     <InfoBlock>
                        <InfoTitle>Altura</InfoTitle>
                        <InfoValue>{pokemon.height / 10} m</InfoValue>

                        <InfoTitle>Tipo</InfoTitle>
                        <InfoValue>{pokemon.types}</InfoValue>

                        <InfoTitle>Peso</InfoTitle>
                        <InfoValue>{pokemon.weight / 10} kg</InfoValue>
                     </InfoBlock>

                     <InfoBlock>
                        <InfoTitle>Habilidades</InfoTitle>
                        <InfoValue>{pokemon.abilities}</InfoValue>

                        <InfoTitle>Movimentos</InfoTitle>

                        <MoveList>
                           {pokemon.moves.map((move, index) => (
                              <Move key={index}>{move}</Move>
                           ))}
                        </MoveList>
                     </InfoBlock>
                  </PokemonInfo>
               </PokemonDetails>
            </ContentWrapper>
         </MainContainer>
      </>
   );
};

export default PokemonsDetails;