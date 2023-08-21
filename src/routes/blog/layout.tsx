import { Slot, component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

export default component$(() => {
  return (
    <>
      <header class={header}>
        <h1 class={contentsTitle}>Blog</h1>
      </header>
      <Slot />
    </>
  );
});

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
