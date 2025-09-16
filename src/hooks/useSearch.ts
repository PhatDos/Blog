import { useEffect, useState } from "react";
import searchService from "../services/searchService";
import useDebounce from "./useDebounce";
import { SearchResultItem } from "../types/Search";

function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(query, 500);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const fetchAPI = async () => {
      try {
        const data = await searchService(debouncedValue, controller.signal);
        setSearchResults(data?.items ?? []);
      } catch (err: any) {
        if (err.name !== "AbortError") console.error(err);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
    return () => controller.abort();
  }, [debouncedValue]);

  return { query, setQuery, searchResults, setSearchResults, loading, showResult, setShowResult };
}

export default useSearch;
