import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPokemons } from '../../services/pokemonService';

const PokemonContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
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
         {pokemons.map((pokemon, index) => (
            <li key={index}>
               <img src={pokemon.image} alt={pokemon.name} />
               <h3>{pokemon.name}</h3>
            </li>
         ))}
      </PokemonContainer>
   );
};

export default PokemonCards;