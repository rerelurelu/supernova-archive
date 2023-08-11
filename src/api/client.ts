import Parser from 'rss-parser';

import { ZENN_FEED_URL } from '~/const/url';
import type { BlogPost, Post, ZennPost } from '~/types';

export const getPosts = async (): Promise<Post[]> => {
  const parser = new Parser();
  const posts: Post[] = [];
  const feedZenn: ZennPost = await parser.parseURL(ZENN_FEED_URL);
  const myPosts = await getBlogPosts();

  feedZenn.items.map((post: ZennPost) => {
    posts.push({
      key: post.link.slice(-14),
      link: post.link,
      title: post.title,
      createdAt: post.isoDate.slice(0, 10),
      tags: ['zenn'],
    });
  });

  myPosts.map((post: BlogPost) => {
    posts.push({
      key: post.id,
      link: `/blog/${post.slug}`,
      title: post.title,
      createdAt: post.createdAt.slice(0, 10),
      tags: ['myself'],
    });
  });

  posts.sort((x, y) => (x.createdAt > y.createdAt ? -1 : 1));

  return posts;
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch(process.env.VITE_CONTENT_API!, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPosts {
          posts(orderBy: publishedAt_DESC, last: 30) {
            createdAt
            title
            slug
            id
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  return data.posts;
};
