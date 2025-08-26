import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import Search from "../Search";
import TippyMoreBtn from "../Tippy/TippyMoreBtn";

const cx = classNames.bind(styles);

function Header() {
  const moreItems = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {}
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
      children: {}
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
      children: {}
    }
  ];
  const handleSelect = () => {};
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
          <div className={`col-1 ${cx("right-header")}`}>
            <a href="/upload">
              <img
                className={cx("profile-icon")}
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="Profile"
              />
            </a>
            {/* More-btn */}
            <TippyMoreBtn moreItems={moreItems} onSelect={handleSelect}>
              <FontAwesomeIcon
                className={cx("more-icon")}
                icon={faEllipsisVertical}
              />
            </TippyMoreBtn>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
