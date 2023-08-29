import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

export default component$(() => {
  return (
    <div class={mainContainer}>
      <div class={letter}>
        <span>□ ■</span>
        <span>■ ■</span>
        <span>□ ■</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>■ □</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ ■</span>
        <span>□ □</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ ■</span>
        <span>□ □</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>□ □</span>
        <span>■ ■</span>
        <span>■ □</span>
      </div>
    </div>
  );
});

const mainContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDir: 'row',
  columnGap: '3rem',
  rowGap: '1rem',
  flexWrap: 'wrap',
  w: '100%',
  h: '70vh',
  pt: { base: '8rem', md: '16rem' },
  color: '#fde047',
});

const letter = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDir: 'column',
});
