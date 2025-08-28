import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faUpload,
  faCloudUpload,
  faMessage
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
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "English"
          },
          { code: "vi", title: "Tiếng Việt" }
        ]
      }
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback"
    },
    {
      icon: <FontAwesomeIcon icon={faUpload} />,
      title: "Upload",
      to: "/upload"
    }
  ];

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  let currentUSer = false;

  return (
    <header className={cx("wrapper")}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left header */}
          <a href="/" className={`col-2 ${cx("left-header")}`}>
            <img
              className={cx("home-icon")}
              src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png"
              alt="Home"
            />
          </a>
          {/* Searchbar */}
          <div className="col-8">
            <Search />
          </div>
          {/* Right header */}
          <div className={`col-2 ${cx("right-header")}`}>
            {currentUSer ? ( //Đã login
              <>
                {/* Avatar */}
                <a href="/upload">
                  <img
                    className={cx("profile-icon")}
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                    alt="Profile"
                  />
                </a>
                {/* More-btn */}
                <TippyMoreBtn moreItems={moreItems} onChange={handleMenuChange}>
                  <FontAwesomeIcon
                    className={cx("more-icon")}
                    icon={faEllipsisVertical}
                  />
                </TippyMoreBtn>
              </>
            ) : (
              //Chưa login
              <>
                <Tippy content="Upload blog" placement="bottom">
                  <button className={cx("header-btn")}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                  </button>
                </Tippy>
                <button className={cx("header-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
                {/* More-btn */}
                <TippyMoreBtn moreItems={moreItems} onChange={handleMenuChange}>
                  <FontAwesomeIcon
                    className={cx("more-icon")}
                    icon={faEllipsisVertical}
                  />
                </TippyMoreBtn>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
