import { fetchPost, fetchPosts } from '~/api/client'
import PostContainer from '~/components/postContainer/postContainer'
import { OG_IMAGE } from '~/const/seo'
import { textSm } from '~/style/style'
import { css } from '~/styled-system/css'
import { divider } from '~/styled-system/patterns'
import { convertDateDisplay } from '~/utils/convertDateDisplay'

import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city';
import type { Post } from '~/types';
export const usePostLoader = routeLoader$(async ({ params, status }) => {
  if (!params.postId) {
    status(404);
  }

  try {
    const post = await fetchPost(params.postId);
    return post;
  } catch {
    status(404);
  }
});

export default component$(() => {
  const post = usePostLoader();

  if (!post.value) {
    return <></>;
  }

  const dateDisplay = convertDateDisplay(post.value.publishedAt.slice(0, 10));

  return (
    <article class={wrapper}>
      <header class={header}>
        <h1 class={title}>{post.value.title}</h1>
        <div class={infoContainer}>
          <p class={[infoText, textSm]}>Published</p>
          <time dateTime={post.value.publishedAt}>{dateDisplay}</time>
        </div>
      </header>
      <div
        class={divider({
          mb: '0',
          mt: '5rem',
          orientation: 'horizontal',
          thickness: '0.125rem',
          color: 'divider',
        })}
      ></div>
      <div class={postWrapper}>
        <PostContainer postContent={post.value.content} />
      </div>
    </article>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const data = await fetchPosts();

  const paths = data.posts.map((post) => {
    return post.id;
  });

  return {
    params: paths.map((postId) => {
      return { postId };
    }),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(usePostLoader) as Post;
  const description = post.content.slice(0, 30);

  return {
    title: `${post.title} | relu`,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: `${post.title} | relu`,
      },
      {
        property: 'og:description',
        content: description,
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
};

const wrapper = css({
  mx: 'auto',
  mt: { base: '6rem', md: '8rem' },
  maxW: '48rem',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const header = css({
  display: 'grid',
  justifyItems: 'center',
  gap: '3rem',
});

const title = css({
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  fontWeight: '600',
});

const infoContainer = css({
  display: 'grid',
  justifyItems: 'center',
  gap: '0.25rem',
  fontSmoothing: 'antialiased',
});

const infoText = css({
  fontWeight: '600',
});

const postWrapper = css({
  mt: '5rem',
  w: '100%',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.025rem',
});
