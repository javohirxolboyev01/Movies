import { useMovie } from "@/api/hook/useMovies";
import MovieView from "@/components/movies/MovieView";
import useDebounce from "@/hooks/useDebounce";
import { useParamsHook } from "@/hooks/useParamsHook";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const { setParam, getParam } = useParamsHook();
  const query = getParam("films");
  const [search, setSearch] = useState(query || "");
  const [page, setPage] = useState(1);
  const { getBySearchs } = useMovie();
  const debounceValue = useDebounce(search, 800);
  const { data, isLoading } = getBySearchs({
    query: query ? query : debounceValue,
    page,
  });

  useEffect(() => {
    document.title = "Search | Movies";
  }, []);

  useEffect(() => {
    if (debounceValue) {
      setParam("films", debounceValue);
    }
  }, [debounceValue]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mt-16 px-2">
          <div className="relative w-full max-w-md">
            <input
              className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 text-black dark:bg-[#1f1f1f] dark:text-white placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-sm"
              value={search}
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mt-10">
          {isLoading ? (
            <p className="text-center text-red-600 mt-10">Loading...</p>
          ) : data?.results?.length ? (
            <>
              <MovieView data={data.results} />
              <div className="flex justify-center mt-10 px-2">
                <Pagination
                  current={page}
                  pageSize={20}
                  total={data.total_results}
                  onChange={(p) => setPage(p)}
                  showSizeChanger={false}
                  className="custom-pagination"
                />
              </div>
            </>
          ) : (
            debounceValue && (
              <p className="text-center text-gray-400 mt-10">
                Kinolar topilmadi !
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Search);
