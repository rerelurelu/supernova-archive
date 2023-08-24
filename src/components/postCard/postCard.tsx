import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { textSm } from '~/style/style';
import { css } from '~/styled-system/css';
import type { tag } from '~/types';
import { convertDateDisplay } from '~/utils/convertDateDisplay';

type Props = {
  title: string;
  href: string;
  createdAt: string;
  tags: tag[];
};

export default component$(({ title, href, createdAt, tags }: Props) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <article class={card}>
      <div class={cardBody}>
        <header class={cardHeader}>
          <h2 class={cardTitle}>
            <Link href={href} class={link}>
              {title}
            </Link>
          </h2>
        </header>
        <div class={timeContainer}>
          <time dateTime={createdAt} class={textSm}>
            {dateDisplay}
          </time>
          <div class={tagContainer}>
            {tags.map((tag) => (
              <div key={tag.id} class={css({ color: 'tagName' })}>
                <span class={[hashTag, textSm]}>#</span>
                <span>{tag.tagName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});

const card = css({
  pos: 'relative',
  display: 'flex',
  flexDir: 'column',
  borderRadius: '1rem',
  h: '12rem',
  overflow: 'hidden',
  bg: 'bgCard',
});

const cardBody = css({
  color: 'cardText',
  p: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  flex: '1 1 auto',
  flexDir: 'column',
  gap: '0.5rem',
});

const cardHeader = css({
  pb: 'auto',
});

const cardTitle = css({
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: '1.75rem',
  overflowWrap: 'break-word',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const link = css({
  _hover: {
    color: 'hoverTitle',
    cursor: 'pointer',
  },
});

const timeContainer = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'end',
});

const tagContainer = css({
  mt: '0.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: '0.5rem',
  rowGap: '0',
});

const hashTag = css({
  mr: '1px',
});
