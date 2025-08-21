const API_URL = "https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts";

const blogService = {
  async getBlogById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch blog");
    return data.data;
  },

  async getBlogs(page = 1, limit = 10) {
    const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  },

  async deleteBlog(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete blog");
    return res.json();
  },

  async createBlog(data) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Failed to create blog");
    return res.json();
  },

  async updateBlog(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH", // hoặc PUT tùy backend
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Failed to update blog");
    return res.json();
  }
};

export default blogService;
