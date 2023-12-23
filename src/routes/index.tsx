import { fetchPosts } from '~/api/client';
import BlogField from '~/components/blogField/blogField';
import Hero from '~/components/hero/hero';
import { OG_IMAGE } from '~/const/seo';
import { css } from '~/styled-system/css';

import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import type { DocumentHead, Loader } from '@builder.io/qwik-city';
import type { PostsData } from '~/types';

export const useRecentPostsLoader: Loader<PostsData> = routeLoader$(async () => {
  const { posts, totalCount } = await fetchPosts();
  return { posts, totalCount };
});

export default component$(() => {
  const data = useRecentPostsLoader();
  const recentPosts = data.value.posts.slice(0, 3);

  return (
    <>
      <div class={wrapper}>
        <Hero />
      </div>
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

const wrapper = css({
  w: '100%',
  h: '100vh',
  display: 'flex',
  justifyContent: 'center',
});
