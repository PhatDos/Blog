import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import blogService from "~/services/blogService";
import { Blog } from "~/types/Blog";

export function useBlogsQuery(page = 1, limit = 12) {
  const queryClient = useQueryClient();

  // Fetch blogs
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<{ items: Blog[]; pagination: { totalPages: number } }, Error>({
    queryKey: ["blogs", page, limit],
    queryFn: async () => {
      const res = await blogService.getBlogs(page, limit);
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const totalPages = data?.pagination?.totalPages || 1;
  const blogs = data?.items || [];

  // Delete blog mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => blogService.deleteBlog(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData<{ items: Blog[]; pagination: { totalPages: number } }>(
        ["blogs", page, limit],
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: oldData.items.filter((b) => b.id !== id),
          };
        }
      );
    },
  });

  const deleteBlog = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return { blogs, totalPages, loading: isLoading, error: isError ? error : null, deleteBlog };
}
