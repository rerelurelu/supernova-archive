export type tag = {
  id: string;
  tagName: string;
};

export type Post = {
  publishedAt: string;
  title: string;
  id: string;
  content: string;
  tags: tag[];
};

export type PostsData = {
  posts: Post[];
  totalCount: number;
};
