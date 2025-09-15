// services/blogService.ts
import * as request from "~/utils/httpRequest";
import { ApiResponse, Blog, BlogListResponse } from "~/types/Blog";

const blogService = {
  async getBlogById(id: string): Promise<ApiResponse<Blog>> {
    try {
      const res = await request.get<ApiResponse<Blog>>(`/posts/${id}`);
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async deleteBlog(id: string): Promise<ApiResponse<Blog>> {
    try {
      const res = await request.del < ApiResponse < Blog >> (`/posts/${id}`);
      return res;
    } catch (err) {
      console.error("Failed to delete blog:", err);
      throw err;
    }
  },

  async getBlogs(page = 1, limit = 12): Promise<ApiResponse<BlogListResponse>> {
    try {
      const res =
        (await request.get) <
        ApiResponse <
        BlogListResponse >>
          ("/posts",
          {
            params: { page, limit },
          });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async createBlog(data: FormData | Partial<Blog>): Promise<ApiResponse<Blog>> {
    try {
      const hasFile = data instanceof FormData;
      const res = hasFile
        ? (await request.postV2) < ApiResponse < Blog >> ("/posts", data)
        : (await request.post) < ApiResponse < Blog >> ("/posts", data);
      return res;
    } catch (err) {
      console.error("Failed to create blog:", err);
      throw err;
    }
  },

  async updateBlog(
    id: string,
    data: FormData | Partial<Blog>,
  ): Promise<ApiResponse<Blog>> {
    try {
      const hasFile = data instanceof FormData;
      const res = hasFile
        ? (await request.patchV2) < ApiResponse < Blog >> (`/posts/${id}`, data)
        : (await request.patch) < ApiResponse < Blog >> (`/posts/${id}`, data);
      return res;
    } catch (err) {
      console.error("Failed to update blog:", err);
      throw err;
    }
  },
};

export default blogService;