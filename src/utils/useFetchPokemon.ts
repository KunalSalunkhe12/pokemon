import { PokemonData } from "@/types";
import { useEffect, useState } from "react";

const useFetchPokemon = (
  currentPage: number,
  number: number,
  search?: string | null
) => {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>();
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (url: URL) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * 12;
        const baseUrl = import.meta.env.VITE_POKEMON_API_URL;
        const url = `${baseUrl}/${
          search ? search : ""
        }?offset=${offset}&limit=${number}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        if (search) {
          setPokemonData([data]);
        } else {
          const pokemonData = await Promise.all(
            data.results.map((pokemon: { name: string; url: URL }) =>
              fetchPokemon(pokemon.url)
            )
          );
          console.log(pokemonData);
          setPokemonData(pokemonData);
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [currentPage, number, search]);

  return { pokemonData, loading };
};

export default useFetchPokemon;
