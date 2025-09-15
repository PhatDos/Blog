export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  thumbnail_url: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface BlogListResponse {
  items: Blog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  error: boolean;
  statusCode: number;
  message: string;
  data: T;
}
