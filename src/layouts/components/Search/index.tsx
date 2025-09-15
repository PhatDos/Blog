import classNames from "classnames/bind";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import useSearch from "~/hooks/useSearch";
import styles from "./Search.module.scss";
import TippySearch, { SearchItem } from "~/layouts/components/Tippy/TippySearch";

const cx = classNames.bind(styles);

function Search() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [ formWidth, setFormWidth ] = useState<number | undefined>();

  const {
    query,
    setQuery,
    searchResults,
    setSearchResults,
    loading,
    showResult,
    setShowResult,
  } = useSearch();

  // Cập nhật width của form khi resize
  useEffect(() => {
    const updateWidth = () => {
      if (formRef.current) setFormWidth(formRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleSelect = (id: string | number) => {
    navigate(`/upload/${id}`);
    setQuery("");
    setSearchResults([]);
  };

  const handleClear = () => {
    setQuery("");
    setSearchResults([]);
    searchRef.current?.focus();
  };

  const handleHideResult = () => setShowResult(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.startsWith(" ")) setQuery(value);
  };

  return (
    <TippySearch
      results={searchResults as SearchItem[]}
      onSelect={handleSelect}
      width={formWidth}
      visible={showResult && searchResults.length > 0}
      onClickOutside={handleHideResult}
    >
      <form
        className={cx("searchForm")}
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={query}
          ref={searchRef}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
          type="text"
          placeholder="Search..."
          className={cx("searchInput")}
          spellCheck={false}
        />

        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            className={cx("loadingIndicator")}
          />
        )}

        {!!query && !loading && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={cx("clearButton")}
            onClick={handleClear}
          />
        )}

        <button
          type="submit"
          className={cx("searchButton")}
          onMouseDown={(e) => e.preventDefault()}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
    </TippySearch>
  );
}

export default Search;
