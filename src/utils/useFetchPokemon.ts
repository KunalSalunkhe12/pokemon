import { PokemonData } from "@/types";
import { useEffect, useState } from "react";

const useFetchPokemon = (
  currentPage: number,
  number: number,
  search?: string | null
) => {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>();
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const baseUrl = import.meta.env.VITE_POKEMON_API_URL;
      const offset = (currentPage - 1) * 12;
      try {
        if (search) {
          const url = `${baseUrl}/${search ? search : ""}`;
          const data = await fetchPokemon(url);
          setPokemonData([data]);
        } else {
          const url = `${baseUrl}?offset=${offset}&limit=${number}`;
          const data = await fetchPokemon(url);
          const pokemonData = await Promise.all(
            data.results.map((pokemon: { name: string; url: string }) =>
              fetchPokemon(pokemon.url)
            )
          );
          setPokemonData(pokemonData);
        }
      } catch (error) {
        console.error(error);
        setPokemonData([]);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [currentPage, number, search]);

  return { pokemonData, loading };
};

export default useFetchPokemon;
