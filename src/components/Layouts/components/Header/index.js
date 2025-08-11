import classNames from "classnames/bind"; // ✅
import styles from "./Header.module.scss";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className="container">
        <div className="row align-items-center">
          <a href="/" className={`col-2 ${cx("left-header")}`}>
            <img
              className={cx("home-icon")}
              src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png"
              alt="Home"
            />
          </a>
          <div className="col-8">
            <Search />
          </div>
          <div className="col-1"></div>
          <a href="/profile" className={`col-1 ${cx("right-header")}`}>
            <img
              className={cx("profile-icon")}
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
              alt="Profile"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
