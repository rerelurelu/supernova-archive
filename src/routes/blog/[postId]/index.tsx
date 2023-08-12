import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getPostDetail } from '~/api/client';
import { css } from '~/styled-system/css';
import { divider } from '~/styled-system/patterns';
import { convertDateDisplay } from '~/utils/convertDateDisplay';

export const usePostLoader = routeLoader$(async ({ params, status }) => {
  if (!params.postId) {
    throw new Error('postId is required');
  }

  try {
    const post = await getPostDetail(params.postId);
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

  const dateDisplay = convertDateDisplay(post.value.createdAt.slice(0, 10));

  return (
    <article class={wrapper}>
      <header class={header}>
        <h1 class={title}>{post.value.title}</h1>
        <div class={infoContainer}>
          <p class={infoText}>Published</p>
          <time dateTime={post.value.createdAt}>{dateDisplay}</time>
        </div>
      </header>
      <div
        class={divider({
          mb: '0',
          mt: '5rem',
          orientation: 'horizontal',
          thickness: '0.125rem',
          color: '#2A2F40',
        })}
      ></div>
      <div class={postContainer}>
        <div class={postBody} dangerouslySetInnerHTML={post.value.content}></div>
      </div>
    </article>
  );
});

const wrapper = css({
  mx: 'auto',
  mt: { _default: '6rem', md: '8rem' },
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
  fontWeight: '700',
});

const infoContainer = css({
  display: 'grid',
  justifyItems: 'center',
  gap: '0.25rem',
  fontSmoothing: 'antialiased',
});

const infoText = css({
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '700',
  opacity: '0.6',
});

const postContainer = css({
  mt: '5rem',
  w: '100%',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.025rem',
});

const postBody = css({
  w: '100%',
  fontWeight: '300',

  '& h1, h2, h3, h4, h5, h6': {
    mt: '4rem',
  },

  '& h1, h2': {
    mb: '0.5rem',
    py: '0.5rem',
    fontWeight: 'bold',
    borderBottom: '0.0625rem solid #b2ebf24d',
  },

  '& h1': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },

  '& h2': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  '& h3': {
    '&::before': {
      mr: '0.5rem',
      content: '#',
    },
  },

  '& h4': {
    '&::before': {
      mr: '0.5rem',
      content: '##',
    },
  },

  '& h5': {
    '&::before': {
      mr: '0.5rem',
      content: '###',
    },
  },

  '& h3, h4, h5, h6': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    mb: '0.75rem',
    fontWeight: '400',
  },

  '& a': {
    color: '#e879f9',
    mx: '1px',
    textDecoration: 'underline',
  },

  '& figure': {
    '& img': {
      w: '100%',
      mx: 'auto',
      my: '2rem',
      borderRadius: '0.5rem',
    },
  },

  '& ul': {
    ml: '1.75rem',
    mb: '2rem',
    listStyleType: 'disc',

    '& li': {
      mx: '0',
      opacity: '0.7',
      fontSize: '1rem',
    },
  },

  '& hr': {
    my: '2rem',
    h: '1px',
    border: 'none',
    bg: '#b2ebf24d',
  },

  '& p': {
    mb: '2rem',
    opacity: '0.7',
    fontSize: '1rem',

    '& code': {
      p: '0.25rem 0.5rem',
      mx: '0.25rem',
      borderRadius: '0.25rem',
      fontSmoothing: 'antialiased',
      bg: '#2b3047',
      color: '#f2f4ffcc',
    },
  },

  '& pre': {
    my: '3rem',
    p: '1rem',
    borderRadius: '0.5rem',
    bg: '#2b3047',
    color: '#f2f4ffcc',

    '& code': {
      py: '1rem',
      fontSize: '1rem',
    },
  },
});
