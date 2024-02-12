import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

export default component$(() => {
  return (
    <footer class={footer}>
      <p>© 2022 relu</p>
    </footer>
  )
})

const footer = css({
  borderTop: '1px solid token(colors.footerBorder)',
  py: '3rem',
  bg: 'bgBase',
  letterSpacing: 'widest',
  textAlign: 'center',
})
