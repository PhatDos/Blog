const API_URL = "https://backend-quiz-627bed8ec3c5.herokuapp.com/v1/posts";
const API_URL_V2 = "https://backend-quiz-627bed8ec3c5.herokuapp.com/v2/posts"; //for file upload

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
    const hasFile = data instanceof FormData;
    const url = hasFile ? API_URL_V2 : API_URL;

    const options = {
      method: "POST",
      body: hasFile ? data : JSON.stringify(data)
    };

    if (!hasFile) {
      options.headers = { "Content-Type": "application/json" };
    }

    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Failed to create blog");
    return res.json();
  },

  async updateBlog(id, data) {
    const hasFile = data instanceof FormData;

    const url = hasFile ? `${API_URL_V2}/${id}` : `${API_URL}/${id}`;

    const options = {
      method: "PATCH",
      body: hasFile ? data : JSON.stringify(data)
    };

    if (!hasFile) {
      options.headers = { "Content-Type": "application/json" };
    }

    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Failed to update blog");
    return res.json();
  }
};

export default blogService;
