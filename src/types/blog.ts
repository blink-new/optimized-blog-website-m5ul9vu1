export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}