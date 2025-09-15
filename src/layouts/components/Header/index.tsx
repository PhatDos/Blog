import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faCloudUpload,
  faMessage,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

import styles from "./Header.module.scss";
import config from "~/config";
import Search from "../Search";
import TippyMoreBtn from "../Tippy/TippyMoreBtn";
import Image from "../Image";

const cx = classNames.bind(styles);

// ==== Types ====
type MenuItem = {
  icon?: ReactNode,
  title: string,
  to?: string,
  separate?: boolean,
  code?: string,
  children?: {
    title: string,
    data: MenuItem[],
  },
};

function Header() {
  const moreItems: MenuItem[] = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          { code: "en", title: "English" },
          { code: "vi", title: "Tiếng Việt" },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faCloudUpload} />,
      title: "Upload",
      to: config.routes.upload,
    },
  ];

  const userMenu: MenuItem[] = [
    ...moreItems,
    {
      icon: <FontAwesomeIcon icon={faMessage} />,
      title: "Messages",
      to: "/messages",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  const handleMenuChange = (menuItem: MenuItem) => {
    console.log(menuItem);
  };

  let currentUser: boolean = false;

  return (
    <header className={cx("wrapper")}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left header */}
          <a href={config.routes.home} className={`col-2 ${cx("left-header")}`}>
            <img className={cx("home-icon")} src="/favicon.ico" alt="Home" />
          </a>

          {/* Searchbar */}
          <div className="col-1"></div>
          <div className="col-6">
            <Search />
          </div>
          <div className="col-1"></div>

          {/* Right header */}
          <div className={`col-2 ${cx("right-header")}`}>
            {!currentUser ? (
              <>
                {/* Avatar */}
                <a href={config.routes.upload}>
                  <Image
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
              <>
                {/* Upload */}
                <Tippy offset={[ 0, 0 ]} content="Upload blog" placement="bottom">
                  <button className={cx("header-btn")}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                  </button>
                </Tippy>
                {/* Message */}
                <Tippy offset={[ 0, 1 ]} content="Message" placement="bottom">
                  <button className={cx("header-btn")}>
                    <FontAwesomeIcon icon={faMessage} />
                    <span className={cx("badge")}>3</span>
                  </button>
                </Tippy>
                {/* More-btn */}
                <TippyMoreBtn moreItems={userMenu} onChange={handleMenuChange}>
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
