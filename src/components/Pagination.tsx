import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  const handlePrevPage = () => {
    const currentPage = searchParams.get("page");
    if (currentPage && currentPage !== "1") {
      const prevPage = parseInt(currentPage) - 1;
      setSearchParams((searchParams) => {
        searchParams.set("page", prevPage.toString());
        return searchParams;
      });
    }
  };

  const handleNextPage = () => {
    const currentPage = searchParams.get("page");
    if (currentPage) {
      const nextPage = parseInt(currentPage) + 1;
      setSearchParams((searchParams) => {
        searchParams.set("page", nextPage.toString());
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.set("page", "2");
        return searchParams;
      });
    }
  };

  return (
    <div className="pb-10">
      <div className="flex justify-center space-x-4">
        <button
          className="py-2 px-4 rounded-lg bg-gray-200"
          disabled={page === "1"}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button className="py-2 px-4 rounded-lg text-secondary">
          {page ?? 1}
        </button>
        <button
          className="py-2 px-4 rounded-lg bg-gray-200"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
