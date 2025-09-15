import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogsQuery } from "~/hooks/useBlogsQuery";
import "./blogsTable.scss";

const BlogsTable = () => {
  const { blogs, loading, deleteBlog } = useBlogsQuery(1, 30);
  const navigate = useNavigate();

  const [ goToTop, setGoToTop ] = useState(false);
  useEffect(() => {
    const handleScroll = () => setGoToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      alert("Blog deleted successfully!");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/upload/${id}`);
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="blogs-table">
      <h2>Blogs</h2>
      <table border={1} cellPadding={8} cellSpacing={0} width="100%">
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
                  width={80}
                  style={{ borderRadius: 6 }}
                />
              </td>
              <td>{blog.title}</td>
              <td>{blog.slug}</td>
              <td>{blog.status}</td>
              <td>{new Date(blog.created_at).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleEdit(blog.id)}>Edit</button>{" "}
                <button
                  style={{ color: "white", background: "red" }}
                  onClick={() => handleDelete(blog.id)}
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
          ▲
        </button>
      )}
    </div>
  );
};

export default BlogsTable;
