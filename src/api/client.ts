import type { MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import type { Post, PostsData } from '~/types';

const ENDPOINT = import.meta.env.PUBLIC_VITE_MICROCMS_ENDPOINT;

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_VITE_MICROCMS_API_KEY,
});

export const getPostList = async (queries?: MicroCMSQueries): Promise<PostsData> => {
  const data = await client.getList<Post>({ endpoint: ENDPOINT, queries });

  return { posts: data.contents, totalCount: data.totalCount };
};

export const getPostDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Post>({
    endpoint: ENDPOINT,
    contentId,
    queries,
  });

  return detailData;
};
