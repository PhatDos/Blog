import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./TippyMoreBtn.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function TippySearch({
  children,
  moreItems,
  onChange = () => {},
  hideOnClick = false
}) {
  let width = 230;
  const [history, setHistory] = useState([{ data: moreItems }]);
  const current = history[history.length - 1];

  //render
  const renderItems = (items) => {
    return items.map((item) => {
      const isParent = !!item.children;

      return item.to ? (
        <a
          key={item.title}
          className={cx("menu-item", { separate: item.separate })}
          href={item.to}
        >
          {item.icon}
          <span>{item.title}</span>
        </a>
      ) : (
        <div
          key={item.title}
          className={cx("menu-item", { separate: item.separate })}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        >
          {item.icon}
          <span>{item.title}</span>
        </div>
      );
    });
  };

  return (
    <Tippy
      placement="bottom-start"
      //visible={true}
      hideOnClick={hideOnClick}
      delay={[0, 400]}
      offset={[11, 10]}
      interactive={true}
      onHidden={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div
          className={cx("more-items")}
          tabIndex="-1"
          {...attrs}
          style={{ width: width || "auto" }}
        >
          {/* Header */}
          {history.length > 1 && (
            <header className={cx("header")}>
              <button //Button back
                className={cx("btn-back")}
                onClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); //xoa phan tu cuoi va tra ve mang moi
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span className={cx("header-title")}>Language</span>
            </header>
          )}
          {/* Render */}
          {renderItems(current.data)}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default TippySearch;
