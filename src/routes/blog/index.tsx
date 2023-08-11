import { component$ } from '@builder.io/qwik';
import type { Loader } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getPosts } from '~/api/client';
import BlogField from '~/components/blogField/blogField';
import { BLOG } from '~/const/seo';
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
        <h1 class={contentsTitle}>{BLOG.TITLE}</h1>
      </header>
      <BlogField posts={posts.value} />
    </>
  );
});

const header = css({
  m: { _default: '8rem auto 0', md: '10rem auto 0' },
});

const contentsTitle = css({
  color: 'white',
  textAlign: 'center',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  fontWeight: '400',
  letterSpacing: '0.1em',
});
