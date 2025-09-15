import { FC, ReactNode } from "react";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

// Định nghĩa props
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
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
      <Footer />
    </div>
  );
};

export default DefaultLayout;
