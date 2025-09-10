import { useEffect, useState } from "react";
import searchService from "../services/searchService";

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

    searchService(debouncedQuery, controller.signal)
      .then((res) => {
        setSearchResults(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setLoading(false);
        }
      });

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
