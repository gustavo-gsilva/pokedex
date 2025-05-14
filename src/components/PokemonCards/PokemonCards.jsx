import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPokemons } from '../../services/pokemonService';

const PokemonList = styled.ul`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 50px;
`;

const PokemonItem = styled.li`
`;

const PokemonImage = styled.img`
   width: 200px;
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
      <PokemonList>
         {pokemons.map((pokemon, index) => (
            <PokemonItem key={index}>
               <PokemonImage src={pokemon.image} alt={pokemon.name} />
               <h3>{pokemon.name}</h3>
            </PokemonItem>
         ))}
      </PokemonList>
   );
};

export default PokemonCards;