import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';
import Avatar from '~/components/avatar/avatar';
import { OG_IMAGE } from '~/const/seo';
import { css } from '~/styled-system/css';

const iconSize = 24;

const sns = {
  github: { href: 'https://github.com/rerelurelu' },
  zenn: { href: 'https://zenn.dev/astrologian' },
} as const;

const intro = {
  para1: `フロントエンドエンジニア（仮）`,
} as const;

export default component$(() => {
  return (
    <div class={container}>
      <Avatar width={512} height={512} />
      <span class={myName}>relu</span>
      <ul class={iconContainer}>
        <li>
          <Link href={sns.github.href} target="_blank" class={snsLink}>
            <Image
              src={'/icons/github-logo.svg'}
              width={iconSize}
              height={iconSize}
              class={icon}
              alt={`Link to GitHub`}
            />
          </Link>
        </li>
        <li>
          <Link href={sns.zenn.href} target="_blank" class={snsLink}>
            <Image
              src={'/icons/zenn-logo.svg'}
              width={iconSize}
              height={iconSize}
              class={icon}
              alt={`Link to Zenn`}
            />
          </Link>
        </li>
      </ul>
      <div class={introContainer}>
        <p>{intro.para1}</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'About | relu',
  meta: [
    {
      name: 'description',
      content: `About relu`,
    },
    {
      name: 'type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'About | relu',
    },
    {
      property: 'og:description',
      content: `About relu`,
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

const container = css({
  display: 'grid',
  placeItems: 'center',
  mt: { base: '8rem', md: '9rem' },
  px: '1.5rem',
});

const myName = css({
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  mt: '2.5rem',
});

const iconContainer = css({
  mt: '1.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  listStyle: 'none',
});

const snsLink = css({
  textDecoration: 'underline',
  _hover: {
    opacity: '0.7',
  },
});

const icon = css({
  fill: '#3b82f6',
});

const introContainer = css({
  mt: '5rem',
  display: 'grid',
  w: '100%',
  maxW: '56rem',
  placeItems: 'center',
  lineHeight: '1.5rem',
});
