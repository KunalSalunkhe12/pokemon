import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      if (searchQuery) {
        setSearchParams((searchParams) => {
          searchParams.delete("page");
          searchParams.set("search", searchQuery);
          return searchParams;
        });
      } else {
        setSearchParams((searchParams) => {
          searchParams.delete("search");
          return searchParams;
        });
        setSearchQuery("");
      }
    }, 500);

    return () => clearTimeout(debouncedSearch);
  }, [searchQuery]);

  return (
    <div className="flex items-center gap-2 border p-2 rounded-lg flex-1 w-full sm:max-w-[450px] self-end">
      <FaSearch size={20} className="text-gray-400" />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search for Pokemon Eg. Pikachu"
        className="border-none w-full outline-none"
      />
      <FaX
        onClick={() => setSearchQuery("")}
        size={20}
        className={`text-gray-400 cursor-pointer ${
          searchQuery ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Search;
