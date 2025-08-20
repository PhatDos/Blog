import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./blogsTable.scss";

const BlogsTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //Go to top
  const [goToTop, setGoToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setGoToTop(window.scrollY > 400);
    });
  }, []);

  // fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts?page=1&limit=30"
      );
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.data.items);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await fetch(
          `https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts/${id}`,
          { method: "DELETE" }
        );
        if (!res.ok) throw new Error("Delete failed");
        setBlogs((prev) => prev.filter((b) => b.id !== id));
        alert("Blog deleted successfully!!!");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/upload/${id}`); // 👉 chuyển sang trang edit
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="blogs-table">
      <h2>Blogs</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <img
                  src={blog.thumbnail_url}
                  alt={blog.title}
                  width="80"
                  style={{ borderRadius: "6px" }}
                />
              </td>
              <td>{blog.title}</td>
              <td>{blog.slug}</td>
              <td>{blog.status}</td>
              <td>{new Date(blog.created_at).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleEdit(blog.id)}>Edit</button>{" "}
                <button
                  onClick={() => handleDelete(blog.id)}
                  style={{ color: "white", background: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {goToTop && (
        <button
          className="go-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="https://www.pngkey.com/png/detail/355-3553692_jump-to-the-top-scroll-to-top-icon.png"></img>
        </button>
      )}
    </div>
  );
};

export default BlogsTable;
