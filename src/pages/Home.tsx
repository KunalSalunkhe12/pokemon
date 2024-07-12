import { useSearchParams } from "react-router-dom";
import useFetchPokemon from "@/utils/useFetchPokemon";
import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";
import PaginatedResults from "@/components/PaginatedResults";

const Home = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search");

  // const loading = false;

  const { pokemonData, loading } = useFetchPokemon(currentPage, 12, search);

  return (
    <section className="h-screen">
      <div className="flex flex-col gap-4 lg:flex-row mt-6 justify-between">
        <Search />
      </div>
      {search ? (
        <SearchResult pokemon={pokemonData} loading={loading} />
      ) : (
        <PaginatedResults pokemon={pokemonData} loading={loading} />
      )}
    </section>
  );
};

export default Home;
