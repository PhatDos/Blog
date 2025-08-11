import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      {/* Categories */}
      <h5 className={cx("title")}>Categories</h5>
      <ul className={cx("list")}>
        {["Technology", "Programming", "Lifestyle", "Travel"].map(
          (cat, index) => (
            <li key={index} className={cx("item")}>
              <label className={cx("checkbox-label")}>
                <input type="checkbox" className={cx("checkbox")} />
                <span className={cx("custom-checkbox")}></span>
                <span className={cx("checkbox-text")}>{cat}</span>
              </label>
            </li>
          )
        )}
      </ul>

      {/* Most Viewed */}
      <h5 className={cx("title")}>Most Viewed</h5>
      <ul className={cx("list")}>
        {[
          "ReactJS Tips & Tricks - 12,340 views",
          "Understanding OOP - 9,210 views",
          "Top 10 Coding Practices - 8,540 views"
        ].map((post, index) => (
          <li key={index} className={cx("item")}>
            <label className={cx("checkbox-label")}>
              <input type="checkbox" className={cx("checkbox")} />
              <span className={cx("custom-checkbox")}></span>
              <span className={cx("checkbox-text")}>{post}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Recent Posts */}
      <h5 className={cx("title")}>Recent Posts</h5>
      <ul className={cx("list")}>
        {[
          "2025-08-09 - How to Optimize Your Code",
          "2025-08-07 - The Future of AI in Development",
          "2025-08-05 - CSS Grid vs Flexbox"
        ].map((post, index) => (
          <li key={index} className={cx("item")}>
            <label className={cx("checkbox-label")}>
              <input type="checkbox" className={cx("checkbox")} />
              <span className={cx("custom-checkbox")}></span>
              <span className={cx("checkbox-text")}>{post}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
