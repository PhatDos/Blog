import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const navigate = useNavigate();

  const blogsPerPage = 12;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts?page=${currentPage}&limit=${blogsPerPage}`
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const json = await res.json();
        const items = json?.data?.items || [];
        const pages = json?.data?.pagination?.totalPages || 0;

        setBlogs(items);
        setTotalPages(pages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
        setTotalPages(0);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  return (
    <div>
      <div className={cx("blog-list")}>
        {blogs.map((blog, index) => {
          const date = blog.published_at || blog.created_at || "";
          const formattedDate = date
            ? new Date(date).toLocaleDateString("vi-VN")
            : "";

          return (
            <div
              key={blog.id || index}
              className={cx("blog-post")}
              onClick={() => navigate(`/upload/${blog.id}`)} // 👈 điều hướng khi click
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
                <div className={cx("post-meta")}>
                  <span className={cx("read-time")}>{blog.readTime || ""}</span>
                </div>
                <p className={cx("summary")}>{blog.summary}</p>
              </div>
            </div>
          );
        })}
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
