import { component$ } from '@builder.io/qwik';
import type { DocumentHead, Loader } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getPosts } from '~/api/client';
import BlogField from '~/components/blogField/blogField';
import { OG_IMAGE } from '~/const/seo';
import { css } from '~/styled-system/css';
import type { Post } from '~/types';

export const usePostsLoader: Loader<Post[]> = routeLoader$(async () => {
  const posts = await getPosts();
  return posts;
});

export default component$(() => {
  const posts = usePostsLoader();

  return (
    <>
      <header class={header}>
        <h1 class={contentsTitle}>Blog</h1>
      </header>
      <BlogField posts={posts.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Blog | relu',
  meta: [
    {
      name: 'description',
      content: `relu's blog`,
    },
    {
      name: 'type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Blog | relu',
    },
    {
      property: 'og:description',
      content: `relu's blog`,
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

const header = css({
  m: { base: '8rem auto 0', md: '10rem auto 0' },
});

const contentsTitle = css({
  color: 'white',
  textAlign: 'center',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  fontWeight: '400',
  letterSpacing: '0.1em',
});
