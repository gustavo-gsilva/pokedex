import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../../services/pokemonService';

const ContainerPokemon = styled.div`
   padding-bottom: 30px;
`;

const PokemonList = styled.ul`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 20px;
   background: ${({ theme }) => theme.backgroundPokemonList};
   border-radius: 13px;
   padding: 25px;
`;

const PokemonItem = styled.li`
   &:hover {
      transform: scale(1.03);
      transition: transform 0.2s ease
   }
`;

const PokemonImage = styled.img`
   width: 167px;
   background: ${({ theme }) => theme.backgroundPokemonImage};
   border-radius: 13px;
   padding: 13px;
   cursor: pointer;
`;

const PokemonNumber = styled.p`
   font-size: 1.4rem;
   font-weight: 600;
   margin: 2px 0 0 14px;
`;

const PokemonName = styled.h1`
   font-size: 2.1rem;
   margin: 10px 0 0 14px;

   &::first-letter {
      text-transform: uppercase;
   }
`;

const Button = styled.button`
   border-radius: 13px;
   border: none;
   padding: 7px 15px;
   cursor: pointer;
   margin-top: 12px;
   font-size: 1.5rem;
   font-family: 'IBM Plex Sans', sans-serif;
   font-weight: 600;
   background: ${({ theme }) => theme.backgroundPokemonList};
   color: ${({ theme }) => theme.textColor};
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

      &:hover {
      transition: all 0.3s ease;
      transform: scale(1.02);
   }
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
   background: ${({ theme }) => theme.backgroundPokemonList};
   font-size: 1.5rem;
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

function PokemonCards() {
   const [pokemons, setPokemons] = useState([]);
   const [loading, setLoading] = useState(true);
   const [loadingScreen, setLoadingScreen] = useState(true);
   const [offset, setOffset] = useState(0);

   const LIMIT = 10;

   useEffect(() => {
      loadInitialPokemons();
   }, []);

   async function loadInitialPokemons() {
      setLoading(true);
      setLoadingScreen(true);

      try {
         await new Promise(resolve => setTimeout(resolve, 1100));

         const initialPokemons = await fetchPokemons(LIMIT, 0);

         setPokemons(initialPokemons);
         setOffset(LIMIT);
      } catch (error) {
         console.error('Erro ao buscar os Pokémons:', error);
      } finally {
         setLoading(false);
         setLoadingScreen(false);
      };
   };

   async function loadMorePokemons() {
      if (loading) return;

      setLoading(true);
      try {
         const newPokemons = await fetchPokemons(LIMIT, offset);
         setPokemons(prev => [...prev, ...newPokemons]);
         setOffset(prev => prev + LIMIT);
      } catch (error) {
         console.error('Erro ao carregar mais Pokémons:', error);
      } finally {
         setLoading(false);
      }
   };

   if (loadingScreen) {
      return (
         <LoadingScreen>
            <LoadingScreenIcon src='/assets/images/pokebola.png' alt='Pokébola Ícone' />
         </LoadingScreen>
      )
   }

   return (
      <ContainerPokemon>
         <PokemonList>
            {
               pokemons.map((pokemon, index) => (
                  <PokemonItem>
                     <Link
                        key={index}
                        to={`/pokemon/${pokemon.name}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                     >
                        <PokemonImage src={pokemon.image} alt={pokemon.name} />
                     </Link>

                     <PokemonNumber>N° {String(pokemon.id).padStart(4, "0")}</PokemonNumber>

                     <PokemonName>{pokemon.name}</PokemonName>
                  </PokemonItem>
               ))
            }
         </PokemonList>

         <Button onClick={loadMorePokemons} disabled={loading}>
            {loading ? "Carregando..." : "Carregar Mais"}
         </Button>
      </ContainerPokemon >
   );
};

export default PokemonCards;