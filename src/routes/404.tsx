import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { OG_IMAGE } from '~/const/seo'
import { css } from '~/styled-system/css'
import { divider } from '~/styled-system/patterns'

export default component$(() => {
  return (
    <div class={wrapper}>
      <div class={container}>
        <h1 class={title}>404</h1>
        <div
          class={divider({
            orientation: 'vertical',
            thickness: '0.125rem',
            color: 'divider',
            h: '3.5rem',
            mx: '1.5rem',
          })}
        ></div>
        <h2 class={info}>This page could not be found.</h2>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: '404 This page could not be found.',
  meta: [
    {
      name: 'description',
      content: '404 This page could not be found.',
    },
    {
      name: 'type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: '404 This page could not be found.',
    },
    {
      property: 'og:description',
      content: '404 This page could not be found.',
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
}

const wrapper = css({
  display: 'grid',
  placeItems: 'center',
  h: '70vh',
  px: '3rem',
})

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const title = css({
  color: 'white',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
})

const info = css({
  color: 'white',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
})
