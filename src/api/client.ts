import type { MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import Parser from 'rss-parser';

import { ZENN_FEED_URL } from '~/const/url';
import type { MyPost, Post, ZennPost } from '~/types';

export const getPosts = async (): Promise<Post[]> => {
  const parser = new Parser();
  const posts: Post[] = [];
  const feedZenn: ZennPost = await parser.parseURL(ZENN_FEED_URL);
  const myPosts = await getPostList();

  feedZenn.items.map((post: ZennPost) => {
    posts.push({
      key: post.link.slice(-14),
      link: post.link,
      title: post.title,
      createdAt: post.isoDate.slice(0, 10),
      tags: ['zenn'],
    });
  });

  myPosts.contents.map((post: MyPost) => {
    posts.push({
      key: post.slug,
      link: `/blog/${post.id}`,
      title: post.title,
      createdAt: post.createdAt.slice(0, 10),
      tags: ['myself'],
    });
  });

  posts.sort((x, y) => (x.createdAt > y.createdAt ? -1 : 1));

  return posts;
};

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export const getPostList = async (queries?: MicroCMSQueries) => {
  const dataList = await client.getList<MyPost>({ endpoint: 'blogs', queries });

  return dataList;
};

export const getPostDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<MyPost>({
    endpoint: 'blogs',
    contentId,
    queries,
  });

  return detailData;
};
