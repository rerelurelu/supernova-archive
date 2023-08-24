import { $, component$, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { HiChevronLeftSolid, HiChevronRightSolid } from '@qwikest/icons/heroicons';
import { css } from '~/styled-system/css';
import { PER_PAGE } from '~/utils/constants';
import { getPagination } from '~/utils/getPagination';

type Props = {
  totalCount: number;
  currentIndex: number;
};

export default component$(({ totalCount, currentIndex }: Props) => {
  const store = useStore({ width: 0 });
  const maxIndex = Math.ceil(totalCount / PER_PAGE);
  const rootUrl = '/blog';

  useVisibleTask$(() => {
    store.width = window.innerWidth;
  });

  useOnWindow(
    'resize',
    $(() => {
      store.width = window.innerWidth;
    }),
  );

  const isLaptop = store.width >= 1024;
  const pagination = getPagination(maxIndex, currentIndex, isLaptop);

  return (
    <div class={wrapper}>
      {currentIndex !== 1 && (
        <Link href={currentIndex === 2 ? rootUrl : `/blog/page/${currentIndex - 1}`}>
          <li class={iconContainer}>
            <HiChevronLeftSolid class={icon} />
          </li>
        </Link>
      )}
      {pagination.map((number, index) => (
        <li key={index} class={indexContainer}>
          {currentIndex === number ? (
            <span>{number}</span>
          ) : (
            <Link href={number === 1 ? rootUrl : `/blog/page/${number}`} class={pageIndex}>
              {number}
            </Link>
          )}
        </li>
      ))}
      {currentIndex !== maxIndex && (
        <Link href={`/blog/page/${Number(currentIndex) + 1}`}>
          <li class={iconContainer}>
            <HiChevronRightSolid class={icon} />
          </li>
        </Link>
      )}
    </div>
  );
});

const wrapper = css({
  mt: { base: '4rem', md: '6rem' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.75rem',
});

const indexContainer = css({
  w: '40px',
  h: '40px',
  lineHeight: '36px',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
});

const pageIndex = css({
  border: '2px solid token(colors.paginationBorder)',
  borderRadius: '50%',
  display: 'block',
  w: '100%',
  _hover: {
    opacity: '0.7',
  },
});

const iconContainer = css({
  w: '24px',
  h: '40px',
  lineHeight: '36px',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
});

const icon = css({
  w: '24px',
  h: '40px',
  lineHeight: '36px',
  color: 'paginationIcon',
  _hover: {
    opacity: '0.7',
  },
});
