import { ReactElement } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./TippySearch.module.scss";

const cx = classNames.bind(styles);

// Kiểu dữ liệu của 1 item trong search
export interface SearchItem {
  id: string | number;
  title: string;
  summary: string;
  thumbnail_url: string;
}

interface TippySearchProps {
  children: ReactElement;
  results: SearchItem[];
  onSelect: (id: string | number) => void;
  width?: string | number;
  visible: boolean;
  onClickOutside: () => void;
}

function TippySearch({
  children,
  results,
  onSelect,
  width,
  visible,
  onClickOutside,
}: TippySearchProps) {
  const renderResult = (items: SearchItem[]) =>
    items.map((item) => (
      <div
        key={item.id}
        className={cx("search-item")}
        onClick={() => onSelect(item.id)}
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
    ));

  return (
    <Tippy
      placement="bottom-start"
      visible={visible}
      offset={[0, 2]}
      interactive={true}
      onClickOutside={onClickOutside}
      render={(attrs) => (
        <div
          className={cx("search-result")}
          tabIndex={-1}
          {...attrs}
          style={{ width: width || "auto" }}
        >
          {renderResult(results)}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default TippySearch;
