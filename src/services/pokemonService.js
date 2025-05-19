export async function fetchPokemons(limit = 10, offset = 0) {
   try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();

      const pokemons = await Promise.all(
         data.results.map(async (pokemon, index) => {
            const id = offset + index + 1;

            const detailsRes = await fetch(pokemon.url);
            const details = await detailsRes.json();

            return {
               id: id,
               name: pokemon.name,
               image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }
         })
      );

      return pokemons;
   } catch (error) {
      console.error('Erro ao buscar os Pokémons:', error);
      throw error;
   };
};