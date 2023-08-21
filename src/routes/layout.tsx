import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';
import { css } from '~/styled-system/css';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <main class={rootLayout}>
        <div class={mainContainer}>
          <Slot />
        </div>
      </main>
      <Footer />
    </>
  );
});

const rootLayout = css({
  minH: '100vh',
  bg: 'bgBase',
});

const mainContainer = css({
  px: { base: '1.25rem', md: '3rem' },
  pt: '4rem',
  pb: { base: '8rem', lg: '12rem' },
});
