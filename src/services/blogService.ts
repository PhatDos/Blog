import { get, del, post, patch, postV2, patchV2 } from "~/utils/apiClient";
import { ApiResponse, Blog, BlogListResponse } from "~/types/Blog";

const blogService = {
  async getBlogById(id: string): Promise<ApiResponse<Blog>> {
    return await get<ApiResponse<Blog>>(`/posts/${id}`);
  },

  async deleteBlog(id: string): Promise<ApiResponse<Blog>> {
    return await del<ApiResponse<Blog>>(`/posts/${id}`);
  },

  async getBlogs(page = 1, limit = 12): Promise<ApiResponse<BlogListResponse>> {
    return await get<ApiResponse<BlogListResponse>>("/posts", {
      params: { page, limit },
    });
  },

  async createBlog(data: FormData | Partial<Blog>): Promise<ApiResponse<Blog>> {
    return data instanceof FormData
      ? await postV2<ApiResponse<Blog>>("/posts", data)
      : await post<ApiResponse<Blog>>("/posts", data);
  },

  async updateBlog(
    id: string,
    data: FormData | Partial<Blog>,
  ): Promise<ApiResponse<Blog>> {
    return data instanceof FormData
      ? await patchV2<ApiResponse<Blog>>(`/posts/${id}`, data)
      : await patch<ApiResponse<Blog>>(`/posts/${id}`, data);
  },
};

export default blogService;
