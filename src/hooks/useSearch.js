import { useEffect, useState } from "react";
import searchService from "../apiServices/searchService";

import useDebounce from "./useDebounce";

function useSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const fetchAPI = async () => {
      const res = await searchService(debouncedQuery, controller.signal);
      if (res) setSearchResults(res.items);
      setLoading(false);
    };

    fetchAPI();

    return () => controller.abort(); // hủy request cũ khi query đổi
  }, [debouncedQuery]);

  return {
    query,
    setQuery,
    searchResults,
    setSearchResults,
    loading,
    showResult,
    setShowResult
  };
}

export default useSearch;
