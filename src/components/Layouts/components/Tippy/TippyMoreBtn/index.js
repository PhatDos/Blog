import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./TippyMoreBtn.module.scss";

const cx = classNames.bind(styles);

function TippySearch({ children, moreItems, onSelect }) {
  let width = 230;
  return (
    <Tippy
      placement="bottom-start"
      interactive={true}
      delay={[0, 500]}
      offset={[0, 10]}
      render={(attrs) => (
        <div
          className={cx("more-items")}
          tabIndex="-1"
          {...attrs}
          style={{ width: width || "auto" }}
        >
          {moreItems.map((item) => (
            <div
              key={item.title}
              className={cx("menu-item")}
              onClick={() => onSelect(item.id)}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default TippySearch;
