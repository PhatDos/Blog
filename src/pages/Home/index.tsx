import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useBlogsQuery } from "~/hooks/useBlogsQuery";
import { Blog } from "~/types/Blog";

const cx = classNames.bind(styles);

function Home() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [ currentPage, setCurrentPage ] = useState<number>(pageFromUrl);

  const navigate = useNavigate();

  const { blogs, totalPages, loading } = useBlogsQuery(currentPage, 12);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  };

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [ pageFromUrl ]);

  return (
    <div>
      {loading && <div className={cx("loading")}>Loading...</div>}

      <div className={cx("blog-list")}>
        {blogs.map((blog: Blog, index: number) => {
          const date = blog.published_at || blog.created_at || "";
          const formattedDate = date
            ? new Date(date).toLocaleDateString("vi-VN")
            : "";

          return (
            <div
              key={blog.id || index}
              className={cx("blog-post")}
              onClick={() => navigate(`/upload/${blog.id}`)}
            >
              <div className={cx("post-image")}>
                {blog.thumbnail_url ? (
                  <img src={blog.thumbnail_url} alt={blog.title} />
                ) : (
                  <div className={cx("no-image")}>No image</div>
                )}
              </div>
              <div className={cx("post-content")}>
                <h2 className={cx("post-title")}>{blog.title}</h2>
                <div className={cx("post-meta")}>
                  <span className={cx("author")}>
                    By {blog.author || "Unknown"}
                  </span>
                  <span className={cx("date")}>{formattedDate}</span>
                </div>
                <p className={cx("summary")}>{blog.summary}</p>
              </div>
            </div>
          );
        })}
      </div>

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
