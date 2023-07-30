import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
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
