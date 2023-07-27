import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <p>hello</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "relu's playground",
  meta: [
    {
      name: 'description',
      content: `relu's personal website`,
    },
    {
      name: 'type',
      content: 'website',
    },
  ],
};
