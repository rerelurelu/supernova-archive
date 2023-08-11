import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { HiArrowTopRightOnSquareOutline } from '@qwikest/icons/heroicons';
import { css } from '~/styled-system/css';
import { convertDateDisplay } from '~/utils/convertDateDisplay';

type Props = {
  title: string;
  href: string;
  createdAt: string;
  tags: string[];
};

export default component$(({ title, href, createdAt, tags }: Props) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <article class={card}>
      <div class={cardBody}>
        <header class={cardHeader}>
          <h2 class={cardTitle}>
            <Link href={href} class={link} target={tags.includes('zenn') ? '_blank' : undefined}>
              {title}
              {tags.includes('zenn') && <HiArrowTopRightOnSquareOutline class={icon} />}
            </Link>
          </h2>
        </header>
        <div class={timeContainer}>
          <time dateTime={createdAt} class={time}>
            {dateDisplay}
          </time>
          <div class={cardActions}>
            {tags.map((tag) => (
              <div key={tag} class={css({ color: '#f0abfc' })}>
                <span class={hashTag}>#</span>
                <span>{tag}</span>
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
  bgImage: 'linear-gradient(to bottom right, #647dee, #7f53ac)',
});

const cardBody = css({
  color: 'white',
  padding: '1.25rem 2.5rem 1.25rem 1.25rem',
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
    color: '#f0abfc',
    cursor: 'pointer',
  },
});

const icon = css({
  display: 'inline-block',
  h: '1em',
  verticalAlign: '-0.125rem',
  ml: '0.1875rem',
  opacity: '0.6',
});

const timeContainer = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'end',
});

const time = css({
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
});

const cardActions = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '0.5rem',
});

const hashTag = css({
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  mr: '1px',
});
