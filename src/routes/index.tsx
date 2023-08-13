import { component$ } from '@builder.io/qwik';
import type { DocumentHead, Loader } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getPosts } from '~/api/client';
import BlogField from '~/components/blogField/blogField';
import { OG_IMAGE } from '~/const/seo';
import type { Post } from '~/types';

export const useRecentPostsLoader: Loader<Post[]> = routeLoader$(async () => {
  const posts = await getPosts();
  return posts;
});

export default component$(() => {
  const posts = useRecentPostsLoader();
  const recentPosts = posts.value.slice(0, 3);

  return (
    <>
      <BlogField posts={recentPosts} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'relu',
  meta: [
    {
      name: 'description',
      content: `relu's personal website`,
    },
    {
      name: 'type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'relu',
    },
    {
      property: 'og:description',
      content: `relu's personal website`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: OG_IMAGE.IMAGE,
    },
    {
      property: 'og:image:type',
      content: OG_IMAGE.IMAGE_TYPE,
    },
    {
      property: 'og:image:width',
      content: OG_IMAGE.WIDTH,
    },
    {
      property: 'og:image:height',
      content: OG_IMAGE.HEIGHT,
    },
  ],
};
