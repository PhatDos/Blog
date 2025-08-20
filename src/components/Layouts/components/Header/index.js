import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
  let formWidth = 210;
  const handleSelect = () => {};
  let searchResults = [
    {
      id: "39d62e47-5998-4a74-a62d-3691a5357674",
      title: "1",
      slug: "11",
      summary: "1.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      status: "DRAFT",
      created_at: "2025-08-17T04:28:08.520Z",
      updated_at: "2025-08-17T04:28:08.520Z",
      published_at: null
    },
    {
      id: "e1e86946-52e5-4f9d-9fea-cf4c617747ba",
      title: "",
      slug: "10-natural-ways-boost-energy-20",
      summary:
        "Discover natural methods to increase your daily energy levels without caffeine or stimulants. From hydration to sunlight exposure, these simple tips can transform your day.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      status: "DRAFT",
      created_at: "2025-08-17T03:30:09.345Z",
      updated_at: "2025-08-17T03:30:09.345Z",
      published_at: null
    },
    {
      id: "1e3f3e4e-dd70-413d-9a6a-924687d325b4",
      title: "",
      slug: "10-natural-ways-boost-energy-19",
      summary:
        "Discover natural methods to increase your daily energy levels without caffeine or stimulants. From hydration to sunlight exposure, these simple tips can transform your day.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      status: "DRAFT",
      created_at: "2025-08-17T03:29:47.253Z",
      updated_at: "2025-08-17T03:29:47.253Z",
      published_at: null
    }
  ];
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
            <Tippy
              placement="bottom-end"
              interactive={true}
              render={(attrs) => (
                <div
                  className={cx("search-result")}
                  tabIndex="-1"
                  {...attrs}
                  style={{ width: formWidth || "auto" }}
                >
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      className={cx("search-item")}
                      onClick={() => handleSelect(item.id)}
                    >
                      <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        className={cx("thumbnail")}
                      />
                      <div className={cx("info")}>
                        <h4>{item.title}</h4>
                        <p>{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            >
              <FontAwesomeIcon
                className={cx("more-icon")}
                icon={faEllipsisVertical}
              />
            </Tippy>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
