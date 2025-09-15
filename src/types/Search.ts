export interface SearchResultItem {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  thumbnail_url?: string;
  status?: string;
  [key: string]: any;
}

export interface SearchData {
  items: SearchResultItem[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SearchResponse {
  success: boolean;
  error: boolean;
  statusCode: number;
  message: string;
  data: SearchData;
}
