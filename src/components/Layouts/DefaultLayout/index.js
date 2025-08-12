import Header from "~/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("default-layout")}>
      <Header />
      <div className={`container-fluid ${cx("main")}`}>
        <div className="row">
          <div className={`col-3 ${cx("sidebar-wrapper")}`}>
            <aside className={cx("sidebar")}>
              <Sidebar />
            </aside>
          </div>
          <main className={`col-9 ${cx("content")}`}>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
