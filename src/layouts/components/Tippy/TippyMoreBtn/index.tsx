import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { ReactElement, ReactNode, useState } from "react";
import styles from "./TippyMoreBtn.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

// Định nghĩa type cho menu item
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

// Props cho component
interface TippyMoreBtnProps {
  children: ReactElement;
  moreItems: MenuItem[];
  onChange?: (item: MenuItem) => void;
  hideOnClick?: boolean;
}

function TippyMoreBtn({
  children,
  moreItems,
  onChange = () => { },
  hideOnClick = false,
}: TippyMoreBtnProps) {
  const width = 230;
  const [ history, setHistory ] = useState<{ data: MenuItem[] }[]>([
    { data: moreItems },
  ]);
  const current = history[ history.length - 1 ];

  // render danh sách items
  const renderItems = (items: MenuItem[]) => {
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
            if (isParent && item.children) {
              setHistory((prev) => [ ...prev, item.children! ]);
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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1))
  }

  const handleToFirstPage = () => { setHistory((prev) => prev.slice(0, 1)) }

  return (
    <Tippy
      placement="bottom-start"
      hideOnClick={hideOnClick}
      delay={[ 0, 400 ]}
      offset={[ 11, 10 ]}
      interactive={true}
      onHidden={handleToFirstPage}
      render={(attrs) => (
        <div
          className={cx("more-items")}
          tabIndex={-1}
          {...attrs}
          style={{ width: width || "auto" }}
        >
          {/* Header */}
          {history.length > 1 && (
            <header className={cx("header")}>
              <button
                className={cx("btn-back")}
                onClick={handleBack}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span className={cx("header-title")}>Language</span>
            </header>
          )}
          {/* Render */}
          <div className={cx("menu-scroll")}>{renderItems(current.data)}</div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default TippyMoreBtn;
