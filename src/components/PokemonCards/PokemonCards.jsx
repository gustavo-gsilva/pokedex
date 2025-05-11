import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPokemons } from '../../services/pokemonService';

const PokemonContainer = styled.div`
   display: flex;
   justify-content: center;
`;

const PokemonList = styled.ul`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
`;

const PokemonItem = styled.li`
`;

function PokemonCards() {
   const [pokemons, setPokemons] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function loadPokemons() {
         try {
            const pokemons = await fetchPokemons(10);

            setPokemons(pokemons);
         } catch (error) {
            console.error('Erro ao buscar os Pokémons:', error);
         } finally {
            setLoading(false);
         };
      };

      loadPokemons();
   }, []);

   if (loading) {
      return <p>Carregando Pokémons...</p>
   }

   return (
      <PokemonContainer>
         <PokemonList>
            {pokemons.map((pokemon, index) => (
               <PokemonItem key={index}>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <h3>{pokemon.name}</h3>
               </PokemonItem>
            ))}
         </PokemonList>
      </PokemonContainer>
   );
};

export default PokemonCards;