import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';
import { divider } from '~/styled-system/patterns';

export default component$(() => {
  return (
    <div class={wrapper}>
      <div class={container}>
        <h1 class={title}>404</h1>
        <div
          class={divider({
            orientation: 'vertical',
            thickness: '0.125rem',
            color: '#334155',
            h: '3.5rem',
            mx: '1.5rem',
          })}
        ></div>
        <h2 class={info}>This page could not be found.</h2>
      </div>
    </div>
  );
});

const wrapper = css({
  display: 'grid',
  placeItems: 'center',
  h: '70vh',
  px: '3rem',
});

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const title = css({
  color: 'white',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
});

const info = css({
  color: 'white',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
});
