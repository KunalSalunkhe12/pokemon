import { PokemonData } from "@/types";
import PokemonCard from "./PokemonCard";
import SkeletonLoading from "./SkeletonLoading";
import { useSearchParams } from "react-router-dom";

type SearchResultProps = {
  pokemon: PokemonData[] | undefined;
  loading: boolean;
};
const SearchResult = ({ pokemon, loading }: SearchResultProps) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div>
      <h1 className="text-2xl font-semibold my-6">
        Search Result for: {search}
      </h1>
      {loading ? (
        <SkeletonLoading />
      ) : pokemon && pokemon.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14 pb-10">
            {pokemon.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl mt-20">No Pokemon</h2>
      )}
    </div>
  );
};

export default SearchResult;
