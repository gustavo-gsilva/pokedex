export async function fetchPokemons(limit = 10) {
   try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await response.json();

      const pokemons = data.results.map((pokemon, index) => ({
         name: pokemon.name,
         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }))

      // const detailedPokemons = await Promise.all(
      //    data.results.map(async (pokemon) => {
      //       const res = await fetch(pokemon.url);
      //       const details = await res.json();

      //       return {
      //          name: pokemon.name,
      //          image: details.sprites.front_default,
      //       };
      //    })
      // );

      return pokemons;
   } catch (error) {
      console.error('Erro ao buscar os Pokémons:', error);
      throw error;
   };
};