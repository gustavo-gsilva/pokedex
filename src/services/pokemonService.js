export async function fetchPokemons(limit = 10) {
   try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await response.json();

      const pokemons = data.results.map((pokemon, index) => ({
         name: pokemon.name,
         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      }))

      return pokemons;
   } catch (error) {
      console.error('Erro ao buscar os Pokémons:', error);
      throw error;
   };
};