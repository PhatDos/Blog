import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.scss";
import useSearch from "~/hooks/useSearch";
import TippySearch from "~/components/Layouts/components/Tippy/TippySearch";

const cx = classNames.bind(styles);

function Search() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [formWidth, setFormWidth] = useState();

  const { query, setQuery, searchResults, setSearchResults, loading } =
    useSearch();

  useEffect(() => {
    const updateWidth = () => {
      setFormWidth(formRef.current?.offsetWidth);
    };
    updateWidth(); //chay lan dau
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleSelect = (id) => {
    navigate(`/upload/${id}`);
    setQuery("");
    setSearchResults([]);
  };

  return (
    <TippySearch
      results={searchResults}
      onSelect={handleSelect}
      width={formWidth}
    >
      <form
        className={cx("searchForm")}
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search..."
          name="search"
          className={cx("searchInput")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && (
          <i
            className={cx(
              "loadingIndicator",
              "fa-solid",
              "fa-spinner",
              "fa-spin"
            )}
          ></i>
        )}
        <button type="submit" className={cx("searchButton")}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </TippySearch>
  );
}

export default Search;
