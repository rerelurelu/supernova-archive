import { component$ } from '@builder.io/qwik';
import type { DocumentHead, Loader } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getPosts } from '~/api/client';
import BlogField from '~/components/blogField/blogField';
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
  title: "relu's playground",
  meta: [
    {
      name: 'description',
      content: `relu's personal website`,
    },
    {
      name: 'type',
      content: 'website',
    },
  ],
};
