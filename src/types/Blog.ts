export interface Blog {
  id: string;
  title: string;
  slug?: string;
  summary?: string;
  author?: string;
  thumbnail_url?: string;
  published_at?: string;
  created_at: string;
  readTime?: string;
  status?: string;
}
