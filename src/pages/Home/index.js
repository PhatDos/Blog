import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home({ data }) {
  const blogs = data || []; // Use the passed data or an empty array if not provided
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 20;

  // Tính vị trí bắt đầu và kết thúc của blogs hiển thị trên trang hiện tại
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Tổng số trang
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={cx("blog-list")}>
        {currentBlogs.map((blog, index) => (
          <div key={index} className={cx("blog-post")}>
            <div className={cx("post-image")}>
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className={cx("post-content")}>
              <h2 className={cx("post-title")}>{blog.title}</h2>
              <div className={cx("post-meta")}>
                <span className={cx("author")}>By {blog.author}</span>
                <span className={cx("date")}>{blog.date}</span>
              </div>
              <div className={cx("post-meta")}>
                <span className={cx("read-time")}>{blog.readTime} đọc</span>
              </div>
              <p className={cx("summary")}>{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className={cx("pagination")}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={cx("page-button", { active: currentPage === pageNum })}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
