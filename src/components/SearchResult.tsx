import { PokemonData } from "@/types";

type SearchResultProps = {
  pokemon: PokemonData[] | undefined;
  loading: boolean;
};
const SearchResult = ({ pokemon, loading }: SearchResultProps) => {
  console.log(loading, pokemon);
  return <div>{pokemon && pokemon[0].name}</div>;
};

export default SearchResult;
