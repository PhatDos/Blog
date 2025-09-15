import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import useSearch from "~/hooks/useSearch";
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
    setShowResult
  } = useSearch();

  // Cập nhật width của form khi resize
  useEffect(() => {
    const updateWidth = () => {
      if (formRef.current) {
        setFormWidth(formRef.current.offsetWidth);
      }
    };
    updateWidth(); // chạy lần đầu
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

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) setQuery(searchValue);
  };

  return (
    <TippySearch
      results={searchResults as SearchItem[]}
      onSelect={handleSelect}
      width={formWidth}
      onClickOutside={handleHideResult}
      visible={showResult && searchResults.length > 0}
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
          name="search"
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
