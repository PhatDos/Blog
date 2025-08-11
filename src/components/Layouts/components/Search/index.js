import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  return (
    <form className={cx("searchForm")} action="/search" method="GET">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        className={cx("searchInput")}
      />
      <button type="submit" className={cx("searchButton")}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Search;
