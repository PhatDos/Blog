import * as request from "~/utils/httpRequest";

const blogService = {
  async getBlogById(id) {
    try {
      const res = await request.get(`/posts/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async getBlogs(page = 1, limit = 12) {
    try {
      const res = await request.get("/posts", {
        params: { page, limit }
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async deleteBlog(id) {
    try {
      const res = await request.del(`/posts/${id}`);
      return res;
    } catch (err) {
      console.error("Failed to delete blog:", err);
      throw err;
    }
  },

  ////
  async createBlog(data) {
    try {
      const hasFile = data instanceof FormData;
      const res = hasFile
        ? await request.postV2("/posts", data)
        : await request.post("/posts", data);

      return res;
    } catch (err) {
      console.error("Failed to create blog:", err);
      throw err;
    }
  },

  async updateBlog(id, data) {
    try {
      const hasFile = data instanceof FormData;

      const res = hasFile
        ? await request.patchV2(`/posts/${id}`, data)
        : await request.patch(`/posts/${id}`, data);

      return res;
    } catch (err) {
      console.error("Failed to update blog:", err);
      throw err;
    }
  }
};

export default blogService;
