import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { textSm } from '~/style/style';
import { css } from '~/styled-system/css';
import type { Post } from '~/types';
import { getPathname } from '~/utils/getPathname';
import PostCard from '../postCard/postCard';

type Props = {
  posts: Post[];
};

export default component$(({ posts }: Props) => {
  const loc = useLocation();
  const isHome = getPathname(loc.url.pathname) === 'home';

  return (
    <section class={blogFieldContainer}>
      {isHome && <h2 class={sectionTitle}>Recent Posts</h2>}
      <div class={postCardsContainer}>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              href={`/blog/${post.id}`}
              createdAt={post.publishedAt.slice(0, 10)}
              tags={post.tags.map((tag) => tag)}
            />
          );
        })}
      </div>
      {isHome && (
        <Link href={'/blog'} class={[link, textSm]}>
          All Posts →
        </Link>
      )}
    </section>
  );
});

const blogFieldContainer = css({
  display: 'grid',
  justifyItems: 'center',
  w: '100%',
  mx: 'auto',
  mt: { base: '4rem', md: '9rem' },
});

const sectionTitle = css({
  mb: { base: '1.5rem', md: '3rem' },
  fontSize: { base: '1.25rem', md: '1.875rem' },
  lineHeight: { base: '1.75rem', md: '2.25rem' },
  textAlign: 'left',
  color: 'white',
});

const postCardsContainer = css({
  mt: { base: '2rem', md: '3rem' },
  display: 'grid',
  w: '100%',
  maxW: '1024px',
  gap: '2rem',
  gridTemplateColumns: {
    sm: 'repeat(1, minmax(0, 1fr))',
    md: 'repeat(2, minmax(0, 1fr))',
    lg: 'repeat(3, minmax(0, 1fr))',
  },
});

const link = css({
  mt: { base: '3rem', md: '4rem' },
  display: 'inline-block',
  textDecoration: 'underline',
});
