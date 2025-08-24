import { useEffect, useState, useRef } from "react";
import searchService from "../services/searchService";

function useSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setLoading(true);

    searchService(query, controllerRef.current.signal)
      .then((data) => {
        setSearchResults(data?.data?.items || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setLoading(false);
        }
      });

    return () => controllerRef.current?.abort();
  }, [query]);

  return { query, setQuery, searchResults, setSearchResults, loading };
}

export default useSearch;
