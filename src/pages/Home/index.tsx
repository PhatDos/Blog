import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useBlogsQuery } from "~/hooks/useBlogsQuery";
import { useCleanQueryParams } from "~/hooks/useCleanQueryParams";
import { Blog } from "~/types/Blog";

const cx = classNames.bind(styles);

function Home() {
  // --- 1. Clean các query param không cần thiết ---
  useCleanQueryParams({
    page: {
      defaultValue: "1",
      validate: (v: string) => !isNaN(Number(v)) && Number(v) >= 1,
    },
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // --- 2. Lấy page từ URL và đảm bảo hợp lệ ---
  const pageFromUrlRaw = searchParams.get("page");
  const pageFromUrl =
    pageFromUrlRaw &&
    !isNaN(Number(pageFromUrlRaw)) &&
    Number(pageFromUrlRaw) >= 1
      ? Number(pageFromUrlRaw)
      : 1;

  const [currentPage, setCurrentPage] = useState<number>(pageFromUrl);

  // --- 3. Fetch blogs ---
  const { blogs, totalPages, loading } = useBlogsQuery(currentPage, 12);

  // --- 4. Xử lý thay đổi trang ---
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  };

  // --- 5. Đồng bộ currentPage khi URL thay đổi ---
  useEffect(() => {
    if (currentPage !== pageFromUrl) {
      setCurrentPage(pageFromUrl);
    }
  }, [pageFromUrl, currentPage]);

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
