import { useState, useEffect } from "react";
import blogService from "~/services/blogService";

export function useBlogs(page = 1, limit = 10) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const json = await blogService.getBlogs(page, limit);
        setBlogs(json?.data?.items || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page, limit]);

  // delete blog
  const deleteBlog = async (id) => {
    try {
      await blogService.deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError(err);
    }
  };

  return { blogs, setBlogs, loading, error, deleteBlog };
}
