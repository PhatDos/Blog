import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home({ image, title, price, oldPrice, sold, location, shipping }) {
  return (
    <div className={cx("product-card")}>
      <div className={cx("product-img")}>
        <img src={image} alt={title} />
      </div>
      <div className={cx("product-info")}>
        <h4 className={cx("product-title")}>{title}</h4>
        <div className={cx("product-price")}>
          <span className={cx("current-price")}>{price}₫</span>
          {oldPrice && <span className={cx("old-price")}>{oldPrice}₫</span>}
        </div>
        <div className={cx("product-meta")}>
          <span className={cx("sold")}>Đã bán {sold}</span>
          <span className={cx("location")}>{location}</span>
        </div>
        <div className={cx("shipping")}>{shipping}</div>
      </div>
    </div>
  );
}

export default Home;
