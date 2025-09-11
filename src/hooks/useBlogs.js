import { useState, useEffect } from "react";
import blogService from "~/apiServices/blogService";

export function useBlogs(page = 1, limit = 12) {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await blogService.getBlogs(page, limit);
        setBlogs(res?.data?.items || []);
        setTotalPages(res?.data?.pagination?.totalPages || 1);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page, limit]);

  const deleteBlog = async (id) => {
    try {
      await blogService.deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError(err);
    }
  };

  return { blogs, setBlogs, totalPages, loading, error, deleteBlog };
}
