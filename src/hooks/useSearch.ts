import { useEffect, useState } from "react";
import searchService from "../services/searchService";
import useDebounce from "./useDebounce";

type SearchResultItem = {
  // định nghĩa theo dữ liệu trả về từ searchService
  id: string;
  title: string;
  [key: string]: any;
};

function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(true);
  const debouncedQuery = useDebounce<string>(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const fetchAPI = async () => {
      try {
        const res = await searchService(debouncedQuery, controller.signal);
        if (res) setSearchResults(res.items);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();

    return () => controller.abort();
  }, [debouncedQuery]);

  return {
    query,
    setQuery,
    searchResults,
    setSearchResults,
    loading,
    showResult,
    setShowResult,
  };
}

export default useSearch;
